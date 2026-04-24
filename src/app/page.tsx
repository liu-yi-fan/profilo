import Image from "next/image";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Nav className="absolute top-0 left-0 w-full" />
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">XXXXXXXXXXXXXXXXXXXXXX</h1>
          <p className=" text-lg text-gray-700 dark:text-gray-300">
            This is a simple Next.js application with a responsive navigation
            bar.
          </p>
        </div>

        <div className="bottom-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://nextjs.org/docs"
                className="text-blue-500 hover:underline"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-blue-500 hover:underline"
              >
                Learn
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
