import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function MovingAnnouncement() {
  return (
    <section className="py-20 bg-[#d6ac4f]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-10 md:p-16 rounded-3xl border border-stone-200 shadow-xl text-center">
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-stone-900 mb-8">
            I’m Moving to Provo
          </h2>
          
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            TruBalance Massage is entering a new chapter. Beginning July 10th, 2026, all
            appointments will take place at our new location inside Jamestown Square in Provo.
          </p>

          {/* Address Box */}
          <div className="bg-[#2c2f62] border-2 border-black rounded-2xl p-8 mb-8">
            <div className="flex justify-center mb-4 text-[#d6ac4f]">
              <MapPin size={32} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">TruBalance Massage</h3>
            <p className="text-white text-lg leading-relaxed">
              3355 North University Ave., Suite 175<br />
              Provo, Utah 84604
            </p>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed mb-10">
            I’m grateful for the time TruBalance has spent in Orem and excited for the 
            opportunity to serve clients in a beautiful, professional new space 
            designed to support the next phase of care.
          </p>

          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4e8d58] text-white px-10 py-4 rounded-full font-bold hover:bg-stone-900 transition-all shadow-lg"
          >
            See New Clinic Details
          </Link>
          
        </div>
      </div>
    </section>
  );
}