import React, { useState } from "react";
import { motion } from "framer-motion";

const initialState = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xeogvqqn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (response.ok) {
        setSent(true);
        setForm(initialState);
        setTimeout(() => setSent(false), 3500);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-10 md:px-20 max-w-full box-border">
      <motion.h2
        className="text-3xl font-bold text-teal-500 mb-20 text-left"
      >
        Contact
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="glass-card flex flex-col gap-6 p-4 sm:p-8 shadow-2xl w-full max-w-xl mx-auto px-2 sm:px-4 md:px-6"
        method="POST"
        action="https://formspree.io/f/xeogvqqn"
        autoComplete="off"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold text-main">Name</label>
          <motion.input
            id="name"
            name="name"
            type="text"
            className={`rounded-lg px-3 sm:px-4 py-3 sm:py-2 bg-transparent border-2 focus:outline-none focus:border-teal-400 transition-colors text-main text-sm sm:text-base ${errors.name ? 'border-red-400' : 'border-accent'}`}
            value={form.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.04 }}
            required
          />
          {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-main">Email</label>
          <motion.input
            id="email"
            name="email"
            type="email"
            className={`rounded-lg px-4 py-2 bg-transparent border-2 focus:outline-none focus:border-teal-400 transition-colors text-main ${errors.email ? 'border-red-400' : 'border-accent'}`}
            value={form.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.04 }}
            required
          />
          {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-semibold text-main">Message</label>
          <motion.textarea
            id="message"
            name="message"
            rows={5}
            className={`rounded-lg px-4 py-2 bg-transparent border-2 focus:outline-none focus:border-teal-400 transition-colors text-main ${errors.message ? 'border-red-400' : 'border-accent'}`}
            value={form.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          {errors.message && <span className="text-red-400 text-xs mt-1">{errors.message}</span>}
        </div>
        <motion.button
          type="submit"
          className="mt-2 py-2 px-8 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </motion.button>
        {sent && (
          <motion.div
            className="mt-2 text-green-500 font-semibold text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            Thank you! Your message has been sent.
          </motion.div>
        )}
        {error && (
          <motion.div
            className="mt-2 text-red-500 font-semibold text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            {error}
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}
