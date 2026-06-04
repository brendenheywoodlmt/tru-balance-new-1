import Link from 'next/link'; // Added this line

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
      <footer className="bg-[#2c2f62] text-stone-400 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TruBalance</h3>
            <p className="text-sm leading-relaxed">
            Creating sacred spaces for healing and transformation through compassionate, trauma-informed bodywork and energy healing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-400">About Brenden</Link></li>
              <li><Link href="/services" className="hover:text-teal-400">Our Services</Link></li>
              <li><Link href="contact" className="hover:text-teal-400">Find Us</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_SQUARE || "/contact"}  className="hover:text-teal-400">Appointment Request</Link></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <p className="text-sm">Based in Utah County</p>
            <p className="text-sm mt-2 font-mono text-[#4e8d58]">trubalance.life</p>
            <p className="text-sm mt-1 font-mono text-[#4e8d58]">Phone number: (385) 203-8749</p>
            <p className="text-sm mt-1 font-mono text-[#4e8d58]">Email: brenden.heywood.lmt@gmail.com</p>
            <div className="flex items-center mt-2">
              <div></div>
              <a href="https://www.instagram.com/trubalance.life/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="Follow us on Instagram"
                 className="text-[#4e8d58] hover:text-[#d6ac4f] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
            </div>
          </div>          </div>        
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs flex justify-between">
          <p>&copy; {year} TruBalance. All rights reserved.</p>
          <p>Built with Next.js & Vercel</p>
        </div>
      </footer>
    );
  }
