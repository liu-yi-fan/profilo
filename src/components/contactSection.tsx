"use client";
import React, { useState } from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with actual submission endpoint
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("sent");
      setForm({ name: "", email: "", organization: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-8 h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <div className="flex flex-row gap-8 justify-between h-[calc(100%-4rem)]">
        {/* Left: intro + social links */}
        <div className="flex flex-col gap-4">
          <p className="text-gray-700 dark:text-gray-300">
            This is the second section of the page.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 max-w-1/2">
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>

          <div className="flex flex-col gap-2 flex-1">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              type="text"
              placeholder="Organization"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full flex-1 mt-2 p-2 border border-gray-300 rounded resize-none"
            />
          </div>

          <div className="flex justify-end mt-4">
            {status === "sent" && (
              <span className="text-green-600 mr-4 self-center text-sm">Message sent!</span>
            )}
            {status === "error" && (
              <span className="text-red-600 mr-4 self-center text-sm">Something went wrong.</span>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;