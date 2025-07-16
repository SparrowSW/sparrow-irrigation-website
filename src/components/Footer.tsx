import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sparrow</h3>
            <p className="text-gray-400">
              Professional irrigation controllers designed for Egyptian gardens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#products" className="hover:text-white">Sparrow Basic</Link></li>
              <li><Link href="#products" className="hover:text-white">Sparrow Pro</Link></li>
              <li><Link href="#products" className="hover:text-white">Sparrow Elite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Installation Guide</Link></li>
              <li><Link href="#" className="hover:text-white">Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white">Facebook</Link></li>
              <li><Link href="#" className="hover:text-white">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sparrow Irrigation. All rights reserved. Made in Egypt 🇪🇬</p>
        </div>
      </div>
    </footer>
  );
}