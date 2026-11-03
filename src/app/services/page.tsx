import { SERVICES, Service } from '@/constants/services';
import { Clock, Tag, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Healing Services | Tru Balance Massage & Reiki",
  description: "Explore our range of healing services including therapeutic massage, reiki, deep tissue therapy, and more. Find the perfect treatment for your wellness journey.",
};

const MASSAGE_PACKAGES = [
  {
    duration: "30 Minutes",
    price: "$188",
    sessions: "4 sessions",
    savings: "Save $12",
    href: process.env.NEXT_PUBLIC_SQUARE_PACKAGE_30 || process.env.NEXT_PUBLIC_SQUARE || "/contact",
  },
  {
    duration: "60 Minutes",
    price: "$370",
    sessions: "4 sessions",
    savings: "Save $30",
    href: process.env.NEXT_PUBLIC_SQUARE_PACKAGE_60 || process.env.NEXT_PUBLIC_SQUARE || "/contact",
  },
  {
    duration: "90 Minutes",
    price: "$550",
    sessions: "4 sessions",
    savings: "Save $50",
    href: process.env.NEXT_PUBLIC_SQUARE_PACKAGE_90 || process.env.NEXT_PUBLIC_SQUARE || "/contact",
  },
  {
    duration: "120 Minutes",
    price: "$720",
    sessions: "4 sessions",
    savings: "Save $80",
    href: process.env.NEXT_PUBLIC_SQUARE_PACKAGE_120 || process.env.NEXT_PUBLIC_SQUARE || "/contact",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-sans text-black">Healing <span className="text-[#4e8d58]">Services</span></h1>
          <p className="mt-4 text-stone-600 text-lg">
            A holistic approach to wellness. Choose the treatment that fits your current path to recovery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => (
            <div 
              key={service.slug} 
              className="bg-white p-8 rounded-2xl border border-black hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-sans text-stone-900 group-hover:text-[#2c2f62] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center space-x-4 text-stone-500 text-sm">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1.5 text-[#2c2f62]" />
                    {service.duration}
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-1.5 text-[#2c2f62]" />
                    {service.price}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href={`/services/${service.slug}`}
                  className="inline-flex items-center font-medium text-stone-900 hover:text-[#2c2f62]"
                >
                  View Details
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Massage Packages Section */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm text-center">
          <h2 className="text-3xl font-sans text-stone-900">Massage Packages</h2>
          <p className="mt-2 text-stone-600 max-w-xl mx-auto">
            A little consistency goes a long way. Save on your regular bodywork with a four-session package.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {MASSAGE_PACKAGES.map((pkg) => (
              <div 
                key={pkg.duration}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-medium text-stone-800">{pkg.duration}</h3>
                  <div className="text-3xl font-bold text-stone-900 mt-3">{pkg.price}</div>
                  <div className="text-sm text-stone-600 mt-2">{pkg.sessions}</div>
                  <div className="text-sm font-medium text-[#4e8d58] mt-1">{pkg.savings}</div>
                </div>

                <div className="mt-8">
                  <Link 
                    href={pkg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#2c2f62] text-white py-2.5 px-4 rounded-xl font-medium hover:bg-[#4e8d58] transition-colors text-center text-sm shadow-sm"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center">
        <div className="bg-[#2c2f62] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-sans mb-4">Ready to start your journey?</h2>
          <p className="text-stone-400 mb-8">Appointments are available Monday through Saturday in Utah County.</p>
          <Link 
            href={process.env.NEXT_PUBLIC_SQUARE || "/contact"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4e8d58] text-white px-5 py-2.5 rounded-full hover:bg-stone-900 transition-all shadow-sm"
          >
            Book An Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}