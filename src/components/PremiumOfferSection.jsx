export default function PremiumOfferSection() {
    return (
        <section className="relative overflow-hidden bg-black py-28 px-6 bg-no-repeat bg-cover"
            style={{ backgroundImage:"url(https://i.pointhacks.com/2018/11/26211239/Singapore-Airlines-A380-New-Business-Class_3943.jpg)"}}>

            <div className="absolute inset-0">
                <img
                    src="/images/luxury-seat.jpg"
                    alt=""
                    className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
            </div>


            <div className="absolute left-1/2 top-16 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c8a27a] to-transparent" />


            <div className="relative mx-auto max-w-4xl rounded-2xl  bg-white/5 p-12 ">

                <h3 className="mb-4 text-center text-sm tracking-[0.25em] text-[#c8a27a]">
                    WHAT WE OFFER
                </h3>

                <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-gray-200">
                    Our travel specialists collaborate directly with major airlines to
                    secure discounted business class tickets and exclusive access to
                    first class flights. Whether you’re traveling for business or
                    leisure, we tailor premium itineraries to your destination and
                    dates—turning exceptional comfort into an accessible experience.
                </p>


                <h3 className="mb-4 text-center text-sm tracking-[0.25em] text-[#c8a27a]">
                    WHY BOOK WITH BUSINESS-CLASS?
                </h3>

                <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-200">
                    With exclusive access to unpublished fares, we make luxury travel
                    more affordable. Enjoy priority check-in, world-class lounges, and
                    seamless booking supported by our 24/7 travel specialists—ensuring
                    comfort without compromise.
                </p>


                <div className="mt-16 flex justify-center">
                    <button className="group relative overflow-hidden rounded-full border border-[#c8a27a] px-10 py-4 text-sm tracking-widest text-white transition-all duration-300 hover:bg-[#c8a27a] hover:text-black">
                        <span className="relative z-10">REQUEST A QUOTE</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </section>
    );
}
