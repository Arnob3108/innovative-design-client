import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white lg:text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            Graphics Design Make You Creative
          </h2>
          <p className="text-base text-white md:text-lg">
            Graphic design blogs can be a great resource to stay ahead of the
            game, whether you’re trying to create presentable logos, prints,
            product labels, or even online marketing materials meant to promote
            a brand.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 text-yellow-400 lg:text-black gap-16 row-gap-8 lg:grid-cols-2">
          <div data-aos="fade-up-right" className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-bold">
                Are you feeling stuck in a rut, behind the times, or out of the
                loop?
              </p>
              <p className="text-amber-500 font-semibold">
                Then you maybe you need to broaden your horizons when it comes
                to design blogs. To help you out, we've listed the 50 best
                design blogs on the web today, ranging from old favourites to
                brand-new upstarts.
                <br />
                <br />
                ranging from old favourites to brand-new upstarts.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold">
                The first mate and his Skipper too will do?
              </p>
              <p className="text-amber-500 font-semibold">
                Well, the way they make shows is, they make one show. That
                show's called a pilot.
                <br />
                <br />
                Then they show that show to the people who make shows, and on
                the strength of that one show they decide if they're going to
                make more shows. Some pilots get picked and become television
                programs.Some don't, become nothing. She starred in one of the
                ones that became nothing.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold">
                Is the Space Pope reptilian!?
              </p>
              <p className="text-amber-500 font-semibold">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-bold">
                How much money you got on you?
              </p>
              <p className="text-amber-500 font-semibold">
                The first mate and his Skipper too will do their very best to
                make the others comfortable in their tropic island nest.
                <br />
                <br />
                Michael Knight a young loner on a crusade to champion the cause
                of the innocent. The helpless. The powerless in a world of
                criminals who operate above the law. Here he comes Here comes
                Speed Racer. He's a demon on wheels.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold">
                Galaxies Orion's sword globular star cluster?
              </p>
              <p className="text-amber-500 font-semibold">
                A business big enough that it could be listed on the NASDAQ goes
                belly up. Disappears!
                <br />
                <br />
                It ceases to exist without me. No, you clearly don't know who
                you're talking to, so let me clue you in.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold">
                When has justice ever been as simple as a rule book?
              </p>
              <p className="text-amber-500 font-semibold">
                This is not about revenge. This is about justice. A lot of
                things can change in twelve years, Admiral. Well, that's
                certainly good to know. About four years. I got tired of hearing
                how young I looked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
