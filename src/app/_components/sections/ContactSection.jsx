// components/sections/ContactSection.jsx
import ContactForm from '../ui/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-800 rounded-lg mt-16 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Contact Me</h2>
        <p className="text-gray-400 text-center mb-8">Feel free to reach out for collaboration or inquiries</p>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}