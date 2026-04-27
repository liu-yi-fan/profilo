"use client";
import React, { useState, useRef } from "react";
import Nav from "@/components/nav";
import CodeSection from "@/components/codeSection";
import DesignSection from "@/components/designSection";
import ContactSection from "@/components/contactSection";

export type SectionMode = "codeIntroduction" | "designIntroduction";

export default function Home() {
  const [switchSection, setSwitchSection] =
    useState<SectionMode>("codeIntroduction");
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSectionSwitch = (section: SectionMode) => {
    setSwitchSection(section);

    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
  };

  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Nav className="fixed top-0 left-0 w-full" />

      <main className="container mx-auto relative min-h-screen p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">XXXXXXXXXXXXXXXXXXXXXX</h1>
            <p className=" text-lg text-gray-700 dark:text-gray-300">
              This is a simple Next.js application with a responsive navigation
              bar.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          ref={sectionRef}
        >
          <ul className="flex space-x-96">
            <li>
              <button
                key={"code"}
                className="cursor-pointer"
                onClick={() => handleSectionSwitch("codeIntroduction")}
              >
                Documentation
              </button>
            </li>
            <li>
              <button
                key={"design"}
                className="cursor-pointer"
                onClick={() => handleSectionSwitch("designIntroduction")}
              >
                Learn
              </button>
            </li>
          </ul>
        </div>
      </main>

      <section className="bg-zinc-100 dark:bg-gray-800 p-4">
        <div className="container mx-auto">
          {switchSection === "codeIntroduction" && <CodeSection />}
          {switchSection === "designIntroduction" && <DesignSection />}
        </div>
      </section>

      <section key="contact" className="bg-zinc-100 dark:bg-gray-800 p-4">
        <div className="container mx-auto">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
