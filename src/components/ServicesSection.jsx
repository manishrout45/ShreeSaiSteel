
import { useState } from "react";
import { ArrowRight, Layers3 } from "lucide-react";

const services = [
  {
    title: "TMT Bars & Reinforcement Steel",
    description:
      "Explore steel reinforcement solutions for residential, commercial, and infrastructure construction. Choose suitable steel products to support strength, durability, and dependable structural performance.",
    image: "https://img.magnific.com/free-photo/construction-steel-reinforcement-closeup-selective-focus-warehouse-building-materials-repair-construction-buildings-houses_166373-3679.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    href: "#contact",
  },
  {
    title: "Structural Steel Products",
    description:
      "Find steel products for a variety of construction and industrial applications. We aim to help customers identify suitable materials based on their project requirements.",
    image: "https://img.magnific.com/premium-photo/stacked-steel-i-beams-construction-site-sunset_1252414-2715.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    href: "#contact",
  },
  {
    title: "Steel Supply for Construction",
    description:
      "Get steel supply solutions for building projects, renovations, and infrastructure requirements, with a focus on product quality, customer support, and reliable service.",
    image: "https://img.magnific.com/premium-photo/closeup-coiled-steel-wire-rods-showcasing-industrial-strength-versatility-manufacturing-applications_893571-72570.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    href: "#contact",
  },
  {
    title: "Steel Product Consultation",
    description:
      "Need help selecting steel products for your project? Connect with our team to discuss your requirements and get guidance on suitable materials for your construction needs.",
    image: "https://img.magnific.com/free-photo/factory-employees-checking-quality-metal-products-production-plant_342744-243.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    href: "#contact",
  },
];

function DiamondIcon() {
  return (
    <Layers3
      size={19}
      strokeWidth={2.2}
      aria-hidden="true"
    />
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <ArrowRight
      size={18}
      strokeWidth={2}
      className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      aria-hidden="true"
    />
  );
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section
      id="services"
      className="bg-[#faf7f7] px-5 py-14 sm:px-8 sm:py-16 lg:px-[4.55%] lg:py-16"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#c62828]">
              <DiamondIcon />
              <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                Our Steel Solutions
              </span>
            </div>

            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#17191d] sm:text-4xl lg:text-[42px]">
              Quality Steel for Every Project
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Discover dependable steel solutions designed to meet a range of
              construction and infrastructure requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-sm bg-[#c62828] px-6 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#a91f1f] focus:outline-none focus:ring-2 focus:ring-[#c62828] focus:ring-offset-2"
          >
            Enquire About Steel
            <ArrowIcon />
          </a>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-[3px]">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <a
                key={service.title}
                href={service.href}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(-1)}
                onTouchStart={() => setActiveIndex(index)}
                className={`group relative isolate grid overflow-hidden bg-white text-[#17191d] transition-[min-height,color] duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c62828] ${
                  isActive
                    ? "min-h-[240px] text-white sm:min-h-[220px] lg:min-h-[212px]"
                    : "min-h-[155px] sm:min-h-[150px] lg:min-h-[152px]"
                } grid-cols-1 items-center gap-4 px-6 py-7 sm:px-10 lg:grid-cols-[1fr_1.35fr_150px] lg:gap-10 lg:px-[5.3%] lg:py-8`}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 -z-10 bg-cover bg-center transition-[opacity,transform] duration-700 ease-in-out ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-[1.04] opacity-0"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(12, 17, 28, 0.76), rgba(12, 17, 28, 0.76)), url("${service.image}")`,
                  }}
                  aria-hidden="true"
                />

                {/* Service Title */}
                <h3
                  className={`max-w-[340px] text-xl font-extrabold uppercase leading-[1.35] transition-colors duration-500 sm:text-2xl lg:text-[21px] ${
                    isActive ? "text-white" : "text-[#17191d]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`max-w-[490px] text-sm leading-[1.8] transition-colors duration-500 ${
                    isActive ? "text-white/95" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Know More */}
                <div
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-500 lg:justify-end ${
                    isActive ? "text-white" : "text-[#17191d]"
                  }`}
                >
                  <span>Know More</span>
                  <ArrowIcon />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
