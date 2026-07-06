import React from 'react';
import { MapPin } from 'lucide-react';

export default function MovingNoticeCard() {
  return (
    <div className="max-w-2xl mx-auto my-12">
      <div className="bg-[#d6ac4f] p-8 rounded-3xl border border-stone-200 shadow-lg">
        
        <h2 className="text-3xl font-sans font-bold text-stone-900 mb-6 text-center">
          New Location As of July 6th, 2026
        </h2>
        
        <p className="text-stone-800 leading-relaxed mb-6 text-center">
          TruBalance Massage has moved to a new professional space in Provo. 
          As of <strong>July 6th, 2026</strong>, all appointments will be held at:
        </p>

        {/* Address Box */}
        <div className="bg-[#2c2f62] border-2 border-black rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4 text-[#d6ac4f]">
            <MapPin size={24} />
            <h3 className="text-white font-bold text-lg">TruBalance Massage</h3>
          </div>
          <p className="text-white text-lg">
            3355 North University Ave., Suite 175<br />
            Provo, Utah 84604
          </p>
        </div>

        <p className="text-stone-800 leading-relaxed mb-4 text-center">
          Please use the new address for appointments scheduled on or after <strong>July 6th, 2026</strong>.
          If you have any questions before your visit, feel free to reach out.
        </p>
        
      </div>
    </div>
  );
}