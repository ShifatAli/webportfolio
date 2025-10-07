import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dummy backend received:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 font-[Inter]">
      {/* === HERO SECTION === */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* gradient glows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute w-[600px] h-[600px] bg-blue-400 blur-3xl rounded-full top-[-10%] right-[-10%] z-0"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
          className="absolute w-[500px] h-[500px] bg-purple-400 blur-3xl rounded-full bottom-[-10%] left-[-10%] z-0"
        ></motion.div>

        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Liam Verne
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium"
          >
            Freelance UI/UX Designer • Product Thinker • Visual Storyteller
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg mb-10"
          >
            I design intuitive digital experiences that make brands stand out and users feel at home.  
            With a blend of aesthetics and usability, I help startups and agencies bring their ideas to life — beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#portfolio"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:opacity-90 transition font-medium"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-400 rounded-full hover:bg-gray-100 transition font-medium"
            >
              Let’s Collaborate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-14 text-gray-500 text-sm tracking-wide"
          >
            Scroll down to see my design universe ↓
          </motion.div>
        </div>
      </section>

    
   {/* About Section */}
<section
  id="about"
  className="py-24 px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center"
>
  <motion.h3
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
  >
    About Me
  </motion.h3>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg mb-12"
  >
    I’m <span className="font-semibold text-gray-900">Liam Verne</span>, a passionate{" "}
    <span className="text-blue-600 font-medium">UI/UX Designer</span> and Frontend Developer 
    focused on crafting digital experiences that feel intuitive and beautiful.
    My goal is to bridge creativity and functionality — transforming ideas into
    interactive interfaces that truly connect with people.
  </motion.p>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {/* Card 1 */}
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-md hover:shadow-xl border border-white/60"
    >
      <h4 className="text-xl font-semibold mb-3 text-gray-900">🎨 Design Philosophy</h4>
      <p className="text-gray-600 text-sm">
        I believe design should solve problems beautifully — balancing 
        creativity with usability for a seamless experience.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-md hover:shadow-xl border border-white/60"
    >
      <h4 className="text-xl font-semibold mb-3 text-gray-900">💡 My Process</h4>
      <p className="text-gray-600 text-sm">
        From wireframes to prototypes — I follow an iterative approach focusing 
        on user empathy, clarity, and delightful interactions.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-md hover:shadow-xl border border-white/60"
    >
      <h4 className="text-xl font-semibold mb-3 text-gray-900">🚀 Tools & Skills</h4>
      <p className="text-gray-600 text-sm">
        Figma, Adobe XD, React, Framer Motion — I bring ideas to life with 
        a blend of creativity, technology, and precision.
      </p>
    </motion.div>
  </div>
</section>


      {/* === SERVICES === */}
      <section id="services" className="py-20 px-6 bg-gradient-to-tr from-white via-blue-50 to-purple-50 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          What I Offer
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "UI Design", desc: "Clean, scalable, and accessible visual interfaces tailored to your brand." },
            { title: "UX Research", desc: "User testing, wireframing, and journey mapping to create seamless flows." },
            { title: "Web Design", desc: "Responsive, modern, and conversion-focused website layouts." },
            { title: "Product Strategy", desc: "Aligning business goals with user needs for sustainable product growth." },
            { title: "Brand Design", desc: "Crafting brand identity and style systems that make lasting impressions." },
            { title: "Prototyping", desc: "Interactive mockups using Figma to visualize experiences before build." },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-white/60"
            >
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === PORTFOLIO === */}
      {/* === PORTFOLIO === */}
<section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
  >
    Selected Projects
  </motion.h3>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      { name: "Fintech Dashboard", tech: "Figma / React / Tailwind", img: "https://i.pinimg.com/736x/d3/58/f4/d358f43c0f2a097469610b6c0934d2cc.jpg" },
      { name: "Travel Mobile App", tech: "Adobe XD / iOS", img: "https://i.pinimg.com/1200x/e8/14/50/e814504c5b73be7dfa6e5be8f5d72643.jpg" },
      { name: "Portfolio Revamp", tech: "Next.js / Framer Motion", img: "https://i.pinimg.com/1200x/17/73/ab/1773ab32c4d76b937878bfe1d828d54f.jpg" },
      { name: "E-Commerce UX Redesign", tech: "Figma / Shopify", img: "https://i.pinimg.com/736x/09/62/c8/0962c8bacfdca617a832a3a666864d1e.jpg" },
      { name: "AI Productivity App", tech: "Figma / React Native", img: "https://i.pinimg.com/1200x/ce/35/30/ce3530354e6e2c3119c5ab1928e9614d.jpg" },
      { name: "SaaS Landing Page", tech: "Figma / Webflow", img: "https://i.pinimg.com/1200x/0f/67/3d/0f673dfff4a004bcd88df43ba01f9cb7.jpg" },
    ].map((p, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        className="bg-white/70 backdrop-blur-sm rounded-xl shadow hover:shadow-md border border-white/50 overflow-hidden transition"
      >
        <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h4 className="font-semibold">{p.name}</h4>
          <p className="text-sm text-gray-500">{p.tech}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* === CONTACT === */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-tr from-white via-blue-50 to-purple-50 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Let’s Work Together
        </motion.h3>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded-md border-gray-300"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border p-3 rounded-md border-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="border p-3 rounded-md border-gray-300"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md hover:opacity-90 transition font-medium"
          >
            {submitted ? "Message Sent ✅" : "Send Message"}
          </button>
        </motion.form>
        <p className="mt-6 text-gray-500">
          Or reach out directly at{" "}
          <a href="mailto:hello@liamverne.com" className="text-blue-600 hover:underline">
            hello@liamverne.com
          </a>
        </p>
      </section>

      {/* === FOOTER === */}
      <footer className="py-6 text-center text-gray-600 text-sm bg-gradient-to-r from-blue-50 via-white to-purple-50 border-t border-white/60">
        © {new Date().getFullYear()} Liam Verne. All Rights Reserved.
      </footer>
    </div>
  );
}
