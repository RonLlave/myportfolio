// components/layout/Footer.jsx
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { socialLinks } from "@/app/_data/social";

const icons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  facebook: FaFacebook,
};

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-800 bg-gray-900 py-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ron Cymond Llave. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ id, label, href }) => {
              const Icon = icons[id];
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 transition-colors hover:text-blue-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
