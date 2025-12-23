export default function ServicesBanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Banner Wrapper */}
        <div
          className="
            mx-auto
            max-w-[943px]
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
                Lorem ipsum dolor sit{" "}
                <span className="text-[#D6CBFF]">amet consectetur</span>
              </h2>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur.
                kshi uemnamet consectetur. kshi uemnamet
              </p>

              <button className="px-8 py-3 rounded-full bg-white text-[#6F44FB] text-sm font-semibold">
                Btn1
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
