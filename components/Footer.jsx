// Footer.js (Next.js compatible)
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] pt-10 pb-4 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link href="#" className="flex justify-start items-center gap-x-2 font-semibold text-xl text-black focus:outline-none focus:opacity-80" aria-label="Brand">
            <Image
              src="/icons/logo.png"
              width='24'
              height='24'
              alt='Ruman Tech'
            />
            Ruman Tech
          </Link>
          <p className="mt-3 text-xs sm:text-sm text-gray-600">© 2024 - All Rights are Reserved</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">Product</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link href="/" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Pricing
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Changelog
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Docs
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Download
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">Company</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                About us
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Blog
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Careers
              </Link>
              
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Customers
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Newsroom
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Sitemap
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">Resources</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Community
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Help & Support
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                eBook
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                What is New
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Status
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">Developers</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                API
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Status
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                GitHub
              </Link>
        
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase">Industries</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Financial Services
              </Link>
            </p>
            <p>
              <Link href="#" className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Education
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
