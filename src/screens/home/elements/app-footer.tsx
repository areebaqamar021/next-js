import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-32">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-xl font-bold mb-4">
              Funiro.
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm text-gray-500 mb-4">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link href="/shop" className="text-sm hover:underline">
                Shop
              </Link>
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm text-gray-500 mb-4">Help</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/payment" className="text-sm hover:underline">
                Payment Options
              </Link>
              <Link href="/returns" className="text-sm hover:underline">
                Returns
              </Link>
              <Link href="/privacy" className="text-sm hover:underline">
                Privacy Policies
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm text-gray-500 mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-black hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16">
          <p className="text-sm text-gray-500">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;