"use client";

import { useRouter } from "next/navigation";

export default function ServicesBanner() {
  const router = useRouter();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Banner Wrapper */}
        <div
          className="
            mx-auto

            w-full
            rounded-[42px]
            bg-gradient-to-r
            from-[#9616FB]
            to-[#3459FB]
            overflow-hidden
          "
        >
          {/* Content */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-[57px]
              p-[42px]
            "
          >
            {/* LEFT CONTENT */}
            <div className="max-w-[420px] text-white">
              <h2 className="text-[34px] md:text-[38px] font-bold leading-[1.15] mb-4">
                Ready to Transform Your{" "}
                <span className="text-[#D6CBFF]">Digital Presence?</span>
              </h2>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Join 500+ businesses across India who trust SUH Tech for their digital transformation.
                Let's build something amazing together.
              </p>

              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-3 rounded-full bg-white text-[#6F44FB] text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                Start Your Project
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex-shrink-0">
              <img
                src="/images/Men_Image.svg"
                alt="Service Banner"
                className="
                  w-[280px]
                  h-[280px]
                  md:w-[474px]
                  md:h-[474px]
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
