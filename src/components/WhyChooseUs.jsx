
import {
  ShieldCheck,
  Award,
  Truck,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={28} strokeWidth={1.7} />,
      title: "Quality-Focused Steel Products",
      description:
        "Steel solutions selected with quality and durability in mind.",
    },
    {
      icon: <Handshake size={28} strokeWidth={1.7} />,
      title: "Customer-First Approach",
      description:
        "Personalized assistance to understand your project requirements.",
    },
    {
      icon: <Truck size={28} strokeWidth={1.7} />,
      title: "Dependable Service",
      description:
        "A service-focused approach to your steel purchasing needs.",
    },
  ];

  const benefits = [
    "Solutions tailored to project requirements",
    "Focus on product quality and durability",
    "Responsive customer communication",
    "Commitment to long-term relationships",
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#faf7f7] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-[#c62828]">
            <Award size={19} strokeWidth={2} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]">
              The Shree Sai Steel Advantage
            </span>
          </div>

          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#17191d] sm:text-4xl lg:text-[46px]">
            Why Choose{" "}
            <span className="text-[#c62828]">Shree Sai Steel?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            We understand that every construction project needs dependable
            materials and reliable service. Our focus is on helping customers
            find suitable steel solutions with confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex items-start gap-5 border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c62828]/40 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#c62828]/10 text-[#c62828] transition-colors duration-300 group-hover:bg-[#c62828] group-hover:text-white">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-base font-extrabold uppercase leading-snug text-[#17191d] sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Split Section */}
        <div className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-2">

          {/* Left: Industrial Image */}
          <div className="group relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
            <img
              src="https://img.magnific.com/premium-photo/different-metal-materials-pallet_249974-13842.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
              alt="Steel materials and industrial construction"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <span className="mb-3 inline-block border-l-4 border-[#c62828] pl-3 text-xs font-bold uppercase tracking-[0.15em]">
                Built on Trust
              </span>

              <h3 className="max-w-lg text-2xl font-extrabold uppercase leading-tight sm:text-3xl lg:text-4xl">
                Strong Materials.
                <span className="mt-1 block text-[#ff7777]">
                  Stronger Relationships.
                </span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
                Supporting your steel requirements with a focus on quality,
                service, and lasting business relationships.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
            <div className="mb-4 flex items-center gap-2 text-[#c62828]">
              <ShieldCheck size={19} />
              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Our Commitment
              </span>
            </div>

            <h3 className="text-2xl font-extrabold uppercase leading-tight text-[#17191d] sm:text-3xl lg:text-[36px]">
              Your Trusted Partner for Steel Solutions
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              At <strong className="text-[#17191d]">Shree Sai Steel</strong>,
              we recognize the importance of choosing the right steel products
              for construction and infrastructure projects. We aim to make
              the process straightforward through attentive service and a
              customer-focused approach.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Whether you are planning a new building or sourcing materials
              for an ongoing project, our goal is to understand your needs
              and help you explore suitable steel options.
            </p>

            {/* Benefits */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#c62828]"
                    strokeWidth={2}
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="#contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#c62828] px-7 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#a91f1f] focus:outline-none focus:ring-2 focus:ring-[#c62828] focus:ring-offset-4"
              >
                Discuss Your Requirements
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
