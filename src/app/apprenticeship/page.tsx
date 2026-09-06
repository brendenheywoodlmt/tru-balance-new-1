import Image from 'next/image';
import Link from 'next/link';

export default function MassageApprenticesPage() {

  return (
    <main className="w-full py-12 space-y-16 text-[#2c2f62]">
      {/* 1. Short Intro Section (Centered) */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-[#2c2f62]">
          Massage Apprenticeship Program
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
          Welcome to our massage apprenticeship program in collaboration with AlignedWest Chiropractic. 
          Here, dedicated hands-on learners gain real-world clinical experience while completing their 
          training. Every session is performed under my direct supervision as their instructor and licensed 
          massage therapist, ensuring you receive exceptional care while supporting the next generation of 
          skilled bodyworkers.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4"><hr className="border-stone-200" /></div>

      {/* 2. Apprentice Photos and Bios Section (Full-Width Gold Background) */}
      <section className="w-full bg-[#d6ac4f] py-16 px-4 shadow-sm">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-2xl font-semibold text-center text-[#2c2f62]">Meet The Apprentice</h2>
          
          {/* Apprentice 1: Photo Top Left, Bio Top Right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-stone-200 shadow-sm">
            <div className="relative w-full h-64 md:h-72 rounded-md overflow-hidden bg-stone-100">
              <Image 
                src="/images/apprenticeheadshot1.png" 
                alt="Apprentice One" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <h3 className="text-xl font-bold text-[#2c2f62]">Ryan</h3>
              <p className="text-sm font-medium text-[#4e8d58]">Massage Apprentice</p>
              <p className="text-stone-700 leading-relaxed">
                Ryan was drawn to massage therapy because he wanted to do something that could 
                make a positive difference in people’s lives. As he’s begun working with clients, 
                one of the things he’s enjoyed most is seeing the change that can happen after a 
                massage, from someone looking and feeling more relaxed to simply leaving in a 
                better place than when they arrived.
                <br />
                <br />
                As he continues his training, Ryan is especially excited to learn more about 
                trigger point therapy and the anatomy of the hands, including how the muscles 
                work together to create such a wide range of movement.
                <br />
                <br />
                Creating a comfortable and professional environment is also important to him. 
                He wants every client to feel respected, at ease, and able to focus on getting 
                the physical relief they came in for.
                <br />
                <br />
                Outside of massage, Ryan enjoys running and playing chess. He has four siblings, 
                two dogs, and a cat, and brings the same drive to massage that he does to the 
                other things he takes on: give it his best and put 100% into the people he works 
                with.
              </p>
            </div>
          </div>

          {/* Apprentice 2: Bio Bottom Left, Photo Bottom Right
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-stone-200 shadow-sm">
            <div className="md:col-span-2 space-y-2 order-2 md:order-1">
              <h3 className="text-xl font-bold text-[#2c2f62]">Apprentice Name Two</h3>
              <p className="text-sm font-medium text-[#4e8d58]">Massage Apprentice</p>
              <p className="text-stone-700 leading-relaxed">
                [Generic bio placeholder: Apprentice Two brings a passionate and intuitive approach to bodywork, 
                emphasizing nervous system regulation, myofascial release, and effective stress relief. They look 
                forward to helping you unwind, restore mobility, and achieve deep physical relaxation.]
              </p>
            </div>
            <div className="relative w-full h-64 md:h-72 rounded-md overflow-hidden bg-stone-100 order-1 md:order-2">
              <Image 
                src="/images/apprenticeheadshot2.png" 
                alt="Apprentice Two" 
                fill 
                className="object-cover"
              />
            </div> 
          </div> */}
        </div>
      </section>

      {/* 3. Services and Pricing Cards (Centered, Standard Background) */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-[#2c2f62]">Services & Pricing</h2>
          <p className="text-stone-600">Professional therapeutic care at accessible apprentice rates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="flex flex-col justify-between p-6 bg-white border border-stone-200 rounded-lg shadow-sm space-y-4">
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-[#2c2f62]">30-Minute Apprentice Massage</h3>
              <p className="text-2xl font-extrabold text-[#4e8d58]">$30</p>
              <p className="text-sm text-stone-600">
                A targeted massage for specific areas of work.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col justify-between p-6 bg-white border border-stone-200 rounded-lg shadow-sm space-y-4">
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-[#2c2f62]">50-Minute Apprentice Massage</h3>
              <p className="text-2xl font-extrabold text-[#4e8d58]">$50</p>
              <p className="text-sm text-stone-600">
                A standard session allowing for full body work.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col justify-between p-6 bg-white border border-stone-200 rounded-lg shadow-sm space-y-4">
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-[#2c2f62]">80-Minute Apprentice Massage</h3>
              <p className="text-2xl font-extrabold text-[#4e8d58]">$80</p>
              <p className="text-sm text-stone-600">
                An extended session for full body comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. Booking Button and Disclaimer Section (Full-Width Gold Background) */}
      <section className="w-full bg-[#d6ac4f] py-16 px-4 shadow-sm text-center space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            {/*ERMALERD! */}
            <a 
              href={process.env.NEXT_PUBLIC_BOOKING_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2c2f62] text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-[#2c2f62]/90 transition-colors"
            >
              Book Appointment via AlignedWest
            </a>
          </div>

          <footer className="pt-6 border-t border-[#c2983e]/60">
            <blockquote className="text-sm text-[#2c2f62] italic max-w-2xl mx-auto font-medium">
              "While I am their instructor and supervising LMT, please note that all apprentice services, 
              appointments, and payments are handled exclusively through AlignedWest Chiropractic, not TruBalance."
            </blockquote>
          </footer>
        </div>
      </section>
    </main>
  );
}