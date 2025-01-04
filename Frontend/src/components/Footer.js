import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-[#8f8f8f] py-10 mx-auto bg-[#1c1c1c]" data-aos="fade-up">
      <div className='max-w-[84%] m-auto mb-10'>
        {/* <img src={logo.src} alt="Logo" className="w-[10rem]" /> */}
      </div>

      {/* Footer Links */}
      <div className="max-w-[84%] m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/investor-relations" className="hover:underline">Investor Relations</a></li>
            <li><a href="/report" className="hover:underline">Report</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Blog</h3>
          <ul>
            <li><a href="/blog" className="hover:underline">Latest Posts</a></li>
            <li><a href="/blog/category/industry" className="hover:underline">Industry Insights</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Promotions</h3>
          <ul>
            <li><a href="/promotions" className="hover:underline">Current Offers</a></li>
            <li><a href="/promotions/subscribe" className="hover:underline">Subscribe for Deals</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="w-min col-span-2 sm:col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a href="https://facebook.com" className="text-white hover:text-gray-400" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://youtube.com" className="text-white hover:text-gray-400" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center gap-8 font-semibold text-sm text-center mt-8">
        <p>&copy; 2024 EcoSun. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
