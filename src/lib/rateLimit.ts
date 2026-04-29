/**
 * Simple in-memory sliding-window rate limiter.
 * Suitable for a single-instance personal project.
 *
 * Default: 3 submissions per 10 minutes per IP.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

interface RateLimitOptions {
  /** Max allowed requests within the window */
  limit?: number;
  /** Window duration in milliseconds */
  windowMs?: number;
}

interface RateLimitResult {
  allowed: boolean;
  /** How many seconds until the oldest request expires */
  retryAfterSecs: number;
}

export function checkRateLimit(
  key: string,
  { limit = 3, windowMs = 10 * 60 * 1000 }: RateLimitOptions = {}
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;

  const entry = store.get(key) ?? { timestamps: [] };

  // Drop timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => t > windowStart);

  if (entry.timestamps.length >= limit) {
    const oldest = entry.timestamps[0];
    const retryAfterSecs = Math.ceil((oldest + windowMs - now) / 1000);
    store.set(key, entry);
    return { allowed: false, retryAfterSecs };
  }

  entry.timestamps.push(now);
  store.set(key, entry);
  return { allowed: true, retryAfterSecs: 0 };
}
