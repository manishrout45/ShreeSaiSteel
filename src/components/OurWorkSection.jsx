
import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "01",
    title: "Raw Material Selection",
    description:
      "Carefully selected steel materials help meet the requirements of construction and industrial projects.",
    side: "right",
  },
  {
    year: "02",
    title: "Steel Processing",
    description:
      "Steel materials are processed and prepared according to the required dimensions and specifications.",
    side: "left",
  },
  {
    year: "03",
    title: "Quality Inspection",
    description:
      "Products are checked for relevant quality standards, specifications, and suitability for their intended use.",
    side: "right",
  },
  {
    year: "04",
    title: "Product Selection",
    description:
      "Suitable steel products are selected to meet the needs of builders, contractors, and other customers.",
    side: "left",
  },
  {
    year: "05",
    title: "Order Preparation",
    description:
      "Customer orders are organized carefully to ensure the correct products and quantities are prepared.",
    side: "right",
  },
  {
    year: "06",
    title: "Delivery & Support",
    description:
      "Shree Sai Steel works to provide dependable order coordination and customer support for steel requirements.",
    side: "left",
  },
];

function DiamondIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 3 5 5-5 5-5-5 5-5Z" />
      <path d="m16 11 5 5-5 5-5-5" />
    </svg>
  );
}

export default function OurWorkSection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);
  const [markerPositions, setMarkerPositions] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let animationFrame = null;

    const updateTimeline = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;

        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Begin filling when the timeline enters the lower
        // part of the viewport; finish near the upper part.
        const startPoint = viewportHeight * 0.78;
        const endPoint = viewportHeight * 0.28;
        const distance = rect.height + startPoint - endPoint;

        const progress = Math.max(
          0,
          Math.min(1, (startPoint - rect.top) / distance)
        );

        setLineProgress(motionPreference.matches ? 1 : progress);

        const markerElements = timeline.querySelectorAll(
          "[data-timeline-marker]"
        );

        const positions = Array.from(markerElements).map((marker) => {
          const markerRect = marker.getBoundingClientRect();

          return {
            top: markerRect.top - rect.top + markerRect.height / 2,
            reached:
              motionPreference.matches ||
              markerRect.top + markerRect.height / 2 <= startPoint,
          };
        });

        setMarkerPositions(positions);
      });
    };

    if (motionPreference.matches) {
      setIsVisible(true);
      setLineProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(section);

    updateTimeline();

    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      id="our-work"
      ref={sectionRef}
      className="w-full overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-[4.5%] lg:py-24"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-24">
        {/* LEFT: Industrial Image */}
        <div
          className={`flex items-center justify-center transition-all duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-12 translate-y-6 opacity-0"
          }`}
        >
          <img
            src="https://img.magnific.com/premium-photo/dynamic-scene-heavy-machinery-operating-steel-mill-with-molten-metal-being-processed-showcasing-industrial-manufacturing-intense-heat-metal-production_894218-36821.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
            alt="Steel processing and industrial equipment"
            className="h-auto max-h-[760px] w-full max-w-[600px] object-contain object-center"
            loading="lazy"
          />
        </div>

        {/* RIGHT: Process Timeline */}
        <div className="min-w-0">
          {/* Heading */}
          <div
            className={`mb-9 transition-all delay-100 duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-3 flex items-center gap-2 text-[#ed494d]">
              <DiamondIcon />
              <span className="text-[11px] font-medium uppercase tracking-wide">
                Our Steel Process
              </span>
            </div>

            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-3xl font-black uppercase leading-tight tracking-wide text-[#101521] sm:text-4xl">
              From Selection to Delivery
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Background Grey Line */}
            <div
              className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#dedede]"
              aria-hidden="true"
            />

            {/* Animated Red Line */}
            <div
              className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-[#ed494d] will-change-[height]"
              style={{
                height: `${lineProgress * 100}%`,
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-8 sm:gap-9">
              {milestones.map((item, index) => {
                const isRight = item.side === "right";
                const isReached =
                  markerPositions[index]?.reached ?? false;

                return (
                  <div
                    key={item.year}
                    className={`relative grid min-h-[68px] grid-cols-[minmax(0,1fr)_36px_minmax(0,1fr)] items-start gap-1 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${250 + index * 180}ms`
                        : "0ms",
                    }}
                  >
                    {/* Left Content */}
                    <div className="min-w-0 pr-1 text-right sm:pr-2">
                      {!isRight && (
                        <>
                          <h3 className="font-[Impact,'Arial_Narrow',sans-serif] text-sm font-bold uppercase leading-[1.4] text-[#101521] sm:text-base lg:text-lg">
                            {item.title}
                          </h3>

                          <p className="mt-2 ml-auto max-w-[245px] text-xs leading-[1.8] text-[#555555] sm:text-[13px]">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Center Marker */}
                    <div className="relative z-10 flex justify-center pt-1">
                      <span
                        data-timeline-marker
                        className={`block h-3 w-3 shrink-0 border transition-all duration-500 ${
                          isReached
                            ? "scale-110 border-[#ed494d] bg-[#ed494d] shadow-[0_0_0_4px_rgba(237,73,77,0.12)]"
                            : "scale-100 border-[#cfcfcf] bg-[#d0d0d0]"
                        }`}
                      />
                    </div>

                    {/* Right Content */}
                    <div className="min-w-0 pl-1 text-left sm:pl-2">
                      {isRight && (
                        <>
                          <h3 className="font-[Impact,'Arial_Narrow',sans-serif] text-sm font-bold uppercase leading-[1.4] text-[#101521] sm:text-base lg:text-lg">
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-[260px] text-xs leading-[1.8] text-[#555555] sm:text-[13px]">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Step Number */}
                    <span
                      className={`pointer-events-none absolute top-0 w-[calc(50%-18px)] font-[Impact,'Arial_Narrow',sans-serif] text-base font-bold leading-6 transition-colors duration-500 sm:text-lg ${
                        isReached
                          ? "text-[#ed494d]"
                          : "text-[#b8b8b8]"
                      } ${
                        isRight
                          ? "left-0 text-right"
                          : "right-0 text-left"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
