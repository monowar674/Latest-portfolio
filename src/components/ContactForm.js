"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    // নতুন 'phone' ফিল্ড যোগ করা হলো
    phone: "", 
    message: "" 
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; 
    
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        // ফর্ম রিসেট
        setForm({ name: "", email: "", subject: "", phone: "", message: "" });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        {/* Name Field (sm:col-span-2 থেকে sm:col-span-1 এ পরিবর্তন করা হলো) */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring focus:ring-orange-500/30 outline-none transition"
          required
        />

        {/* নতুন Phone Field (sm:col-span-1 এ রাখা হলো) */}
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring focus:ring-orange-500/30 outline-none transition"
        />

        {/* Email Field (sm:col-span-2 থেকে sm:col-span-1 এ পরিবর্তন করা হলো) */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring focus:ring-orange-500/30 outline-none transition"
          required
        />
        
        {/* Subject Field (sm:col-span-1 এ রাখা হলো) */}
        <input
          type="text"
          name="subject"
          placeholder="Subject (বিষয়)"
          value={form.subject}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring focus:ring-orange-500/30 outline-none transition"
          required
        />
        
        {/* Message Field (sm:col-span-2) */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="sm:col-span-2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring focus:ring-orange-500/30 outline-none transition"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`sm:col-span-2 font-bold py-3 rounded-lg transition ${
             loading 
             ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
             : 'bg-orange-500 hover:bg-orange-600 text-white'
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status && (
        <p className={`mt-4 text-center p-3 rounded ${
           status.startsWith('Error') ? 'bg-red-900 text-red-300' : 'bg-green-900 text-green-300'
        }`}>
          {status}
        </p>
      )}
    </div>
  );
}