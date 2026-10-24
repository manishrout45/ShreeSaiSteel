
import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const tabs = {
  Quality: {
    description:
      "At Shree Sai Steel, we believe quality is the foundation of every strong structure. We focus on supplying steel products selected for durability, strength, and dependable performance.",
    features: [
      "Quality-Focused Steel Products",
      "Strength and Durability",
      "Careful Product Selection",
      "Reliable Steel Solutions",
      "Consistent Service Standards",
      "Customer Satisfaction",
    ],
  },
  Approach: {
    description:
      "We take a customer-first approach by understanding project requirements and helping customers find suitable steel solutions for construction and infrastructure applications.",
    features: [
      "Customer-Focused Service",
      "Understanding Project Needs",
      "Practical Steel Solutions",
      "Responsive Communication",
      "Product Guidance",
      "Long-Term Relationships",
    ],
  },
  Commitment: {
    description:
      "Our commitment is to build lasting relationships through dependable service, transparent communication, and a consistent focus on customer requirements.",
    features: [
      "Dependable Customer Support",
      "Professional Service",
      "Timely Communication",
      "Value for Your Investment",
      "Trust and Transparency",
      "Reliable Business Partnership",
    ],
  },
};

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c62828] text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-3.5 w-3.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m5 12 4 4L19 6" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("Quality");
  const activeContent = tabs[activeTab];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {/* Left: Steel Industry Image Gallery */}
        <div className="min-w-0">
          <div className="group overflow-hidden rounded-sm">
            <img
              src="https://img.magnific.com/premium-photo/stacked-steel-pipes-warehouse_1127-53400.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
              alt="Steel industry and metal processing"
              className="h-[300px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] sm:h-[400px] lg:h-[477px]"
            />
          </div>

          <div className="mt-7 grid grid-cols-2 gap-5 sm:gap-7">
            <div className="group overflow-hidden rounded-sm">
              <img
                src="https://img.magnific.com/free-photo/interior-view-steel-factory_1359-120.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
                alt="Steel production and metal processing"
                className="h-[170px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[230px]"
                loading="lazy"
              />
            </div>

            <div className="group overflow-hidden rounded-sm">
              <img
                src="https://img.magnific.com/free-photo/large-steel-factory-warehouse_1127-3285.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
                alt="Steel fabrication and metalwork"
                className="h-[170px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[230px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right: About Shree Sai Steel */}
        <div className="flex min-w-0 flex-col justify-center lg:py-4">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck
              size={21}
              className="shrink-0 text-[#c62828]"
              aria-hidden="true"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#c62828]">
              About Shree Sai Steel
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 max-w-[700px] text-3xl font-extrabold uppercase leading-[1.16] tracking-tight text-[#17191d] sm:text-4xl xl:text-[48px]">
            Building Strong Foundations for a Better Tomorrow
          </h2>

          <p className="mb-8 max-w-2xl text-[15px] leading-[1.85] text-gray-600 sm:text-base">
            Shree Sai Steel is committed to providing dependable steel
            solutions for construction and infrastructure needs. With a focus
            on quality, customer service, and lasting value, we aim to help
            customers build with confidence.
          </p>

          {/* Interactive Tabs */}
          <div
            className="flex gap-7 overflow-x-auto border-b border-gray-200 sm:gap-10"
            role="tablist"
            aria-label="Shree Sai Steel values"
          >
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                id={`tab-${tab}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls="about-tab-panel"
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 pb-4 text-sm font-bold uppercase transition-colors duration-200 sm:text-base ${
                  activeTab === tab
                    ? "text-[#c62828]"
                    : "text-[#17191d] hover:text-[#c62828]"
                }`}
              >
                {tab}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#c62828] transition-transform duration-300 ${
                    activeTab === tab ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            id="about-tab-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="pt-7"
          >
            <p className="max-w-2xl text-[15px] leading-[1.85] text-gray-600 sm:text-base">
              {activeContent.description}
            </p>

            {/* Features Checklist */}
            <div className="mt-7 grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
              {activeContent.features.map((feature, index) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="flex items-center gap-3 text-sm leading-6 text-gray-700 sm:text-[15px]"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-sm bg-[#c62828] px-7 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#a91f1f] focus:outline-none focus:ring-2 focus:ring-[#c62828] focus:ring-offset-4"
            >
              Get in Touch
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
