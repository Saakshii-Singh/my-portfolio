import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7zufnwv",        // ✅ your service id
        "template_vld9asn",       // ✅ your template id
        form.current,
        "536SksqGiGvuREEc6"       // ✅ your public key
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("ERROR:", error);
          alert("Failed to send ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-16"
    >
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Get In Touch
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Let's build something amazing ✨
              </h3>

              <p className="text-gray-300">
                Feel free to reach out for collaborations or just a chat.
              </p>

              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <FaEnvelope /> sakshi25012005@gmail.com
                </p>
                <p>📍 India</p>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/sakshi-singh-445a992ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  <FaLinkedin /> LinkedIn
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}