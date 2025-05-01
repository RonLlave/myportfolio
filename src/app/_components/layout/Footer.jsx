// components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Ron Cymond Llave. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
