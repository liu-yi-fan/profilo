import React from "react";

const ContactSection = () => {
  return (
    <div className="py-8 h-screen">
      <h2 className="text-2xl font-bold mb-4">Section 2</h2>

      <div className="flex flex-row gap-8 justify-between">
        <p className="text-gray-700 dark:text-gray-300">
          This is the second section of the page.
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Organization" />
          <textarea
            placeholder="Your Message"
            className="w-full h-32 mt-2 p-2 border border-gray-300 rounded"
          ></textarea>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
