import React from "react";

export default function Home() {
  return (
    <main className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 min-h-screen px-6 py-12 md:px-20">
      {/* Hero Section */}
      <section className="text-left mb-20 py-12 border border-gray-200 bg-white px-8 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
            Adare Digital Services Ltd
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
            Helping public sector teams go digital — securely, affordably, and fast.
          </p>
          <button
            className="text-lg px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto mb-20 bg-emerald-50 p-6 shadow-md rounded-xl dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-800 dark:text-emerald-300">About Us</h2>
        <p>
          Adare Digital Services Ltd is a UK-based IT consultancy providing reliable, cost-effective digital solutions tailored for public sector clients. More than just tech, we aim to deliver work with meaning — combining innovation, integrity, and a mission to serve communities through impactful systems.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-emerald-800 dark:text-emerald-300">Our Services</h2>
        <ul className="space-y-6">
          <li className="bg-emerald-50 p-5 rounded-xl shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Website Design & Development</h3>
            <p>Clean, accessible websites for public sector teams, small businesses, and community organisations – built with speed, clarity, and compliance in mind.</p>
          </li>
          <li className="bg-emerald-50 p-5 rounded-xl shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Automation & Script Support</h3>
            <p>Custom scripts to eliminate repetitive admin tasks, generate reports, or clean up messy data. Designed for impact, built with simplicity.</p>
          </li>
          <li className="bg-emerald-50 p-5 rounded-xl shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Cloud Migration & Email Setup</h3>
            <p>Helping organisations move from outdated inboxes or file systems to secure, cloud-based solutions like Zoho, Gmail, and Office365.</p>
          </li>
          <li className="bg-emerald-50 p-5 rounded-xl shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Tech Support & Security Help</h3>
            <p>General IT support with a focus on email/domain security, SSL, password policy setup, and simple fixes that improve digital hygiene.</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto text-center bg-emerald-50 p-6 rounded-xl shadow dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-800 dark:text-emerald-300">Get in Touch</h2>
        <p className="mb-4">
          Email us at <a href="mailto:info@adaredigital.co.uk" className="text-emerald-600 underline dark:text-emerald-400">info@adaredigital.co.uk</a>
        </p>
        <form
          action="https://formspree.io/f/xjkyjjdq"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 p-3 rounded dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 p-3 rounded dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="border border-gray-300 p-3 rounded dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="text-lg px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
