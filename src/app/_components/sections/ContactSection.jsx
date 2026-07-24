// components/sections/ContactSection.jsx
import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-2xl border border-gray-700/60 bg-gray-800/60 py-16 mt-8 mb-12"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Contact Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          <p className="mt-4 text-gray-400">
            Feel free to reach out for collaboration or inquiries
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
