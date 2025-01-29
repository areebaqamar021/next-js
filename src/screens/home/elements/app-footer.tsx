import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-32">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold mb-4 text-black">
              Funiro.
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-4">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm hover:underline font-semibold text-black">
                Home
              </Link>
              <Link href="/shop" className="text-sm hover:underline font-semibold text-black">
                Shop
              </Link>
              <Link href="/about" className="text-sm hover:underline font-semibold text-black">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:underline font-semibold text-black">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-4">Help</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/payment" className="text-sm hover:underline font-semibold text-black">
                Payment Options
              </Link>
              <Link href="/returns" className="text-sm hover:underline font-semibold text-black">
                Returns
              </Link>
              <Link href="/privacy" className="text-sm hover:underline font-semibold text-black">
                Privacy Policies
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 text-sm border-b border-gray-300 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="text-sm text-black border-b border-gray-800 font-semibold"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;