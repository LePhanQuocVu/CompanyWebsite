import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h6 className="font-semibold mb-2">Quick links</h6>
            <ul className="space-y-1">
              <li><a href="/#" className="hover:underline">Home</a></li>
              <li><a href="/#" className="hover:underline">What's new</a></li>
              <li><a href="/#" className="hover:underline">Featured Product</a></li>
              <li><a href="/#" className="hover:underline">Newsletter</a></li>
              <li><a href="/#" className="hover:underline">My account</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-2">Information</h6>
            <ul className="space-y-1">
              <li><a href="/#" className="hover:underline">About us</a></li>
              <li><a href="/#" className="hover:underline">Membership</a></li>
              <li><a href="/#" className="hover:underline">Shipping & returns</a></li>
              <li><a href="/#" className="hover:underline">Contact</a></li>
              <li><a href="/#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-2">Follow us</h6>
            <ul className="space-y-1">
              <li><a href="/#" className="hover:underline">Facebook</a></li>
              <li><a href="/#" className="hover:underline">Twitter</a></li>
              <li><a href="/#" className="hover:underline">Instagram</a></li>
              <li><a href="/#" className="hover:underline">LinkedIn</a></li>
              <li><a href="/#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-2">Contact</h6>
            <address className="not-italic space-y-1">
              <p><strong>BIET Jhansi</strong></p>
              <p>Panchwati Hostel</p>
              <p>Jhansi, Uttar Pradesh</p>
              <p>
                <span className="font-medium">T:</span>{' '}
                <a href="/tel:+919876543210" className="hover:underline">(987) 654-3210</a>
              </p>
              <p>
                <span className="font-medium">M:</span>{' '}
                <a href="/mailto:info@domain.com" className="hover:underline">info@domain.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className=" border-t pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <ul className="flex flex-wrap gap-4 mb-2 md:mb-0">
            <li>&copy; 2025 Web Company, Inc.</li>
            <li>All rights reserved.</li>
            <li><a href="/#" className="hover:underline">Terms of use and privacy policy</a></li>
          </ul>

          <div className="relative inline-block">
            <select className="text-sm p-2 border rounded bg-white shadow">
              <option>www.otherwebsite.com</option>
              <option>www.newwebsite.com</option>
              <option>www.oldwebsite.com</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
