
const pages = [
  { label: "About Us", href: "#about" },
  { label: "Steel Products", href: "#services" },
  { label: "Our Process", href: "#our-work" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "News & Updates", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { label: "TMT Bars & Reinforcement Steel", href: "#services" },
  { label: "Structural Steel Products", href: "#services" },
  { label: "Steel for Construction", href: "#services" },
  { label: "Steel Product Consultation", href: "#services" },
  { label: "Steel Supply Solutions", href: "#services" },
  { label: "Order & Delivery Support", href: "#contact" },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.7"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

function GoogleBusinessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[19px] w-[19px]"
      aria-hidden="true"
    >
      <path
        d="M3 9.5 5 4h14l2 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 9.5v10h16v-10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 19.5v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.5c0 1.5 1 2.5 2.5 2.5S8 11 8 9.5M8 9.5c0 1.5 1 2.5 2.5 2.5S13 11 13 9.5M13 9.5c0 1.5 1 2.5 2.5 2.5S18 11 18 9.5M18 9.5c0 1.5 1 2.5 3 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[34px] w-[34px] items-center justify-center bg-[#e9474b] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#171923] focus:outline-none focus:ring-2 focus:ring-[#e9474b] focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-[18px] font-[Impact,'Arial_Narrow',sans-serif] text-[15px] font-bold uppercase text-[#101521]">
        {title}
      </h3>

      <ul className="space-y-[11px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[12px] text-[#101521] transition-colors duration-200 hover:text-[#e9474b]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const phoneNumber = "+91 9337142166";

  return (
    <footer className="w-full bg-[#faf7f7] text-[#101521]">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.35fr_1.2fr_0.65fr_0.8fr] lg:gap-x-10 lg:px-[5.2%] lg:py-[65px] xl:gap-x-14">
        {/* Brand and Logo */}
        <div className="min-w-0">
          <a
            href="/"
            className="inline-flex items-center"
            aria-label="Shree Sai Steel home"
          >
            <img
              src="/assets/images/Logo.png"
              alt="Shree Sai Steel Logo"
              className="h-[68px] w-auto max-w-[220px] object-contain object-left"
            />
          </a>

          <p className="mt-[31px] max-w-[330px] text-[12px] leading-[1.75] text-[#252525]">
            Shree Sai Steel supports construction and infrastructure
            projects with steel products and dependable customer service.
            We aim to help customers find suitable steel solutions for
            their project requirements.
          </p>
        </div>

        {/* Contact Details */}
        <div className="min-w-0">
          <p className="text-[12px] leading-5 text-[#252525]">
            Have a question about steel products or an order? Reach out
            to us.
          </p>

          <a
            href="mailto:info@shreesaisteel.com"
            className="mt-1 inline-block font-[Impact,'Arial_Narrow',sans-serif] text-[15px] font-bold uppercase text-[#101521] transition-colors hover:text-[#e9474b]"
          >
            CONTACT SHREE SAI STEEL
          </a>

          <div className="mt-[22px]">
            <p className="text-[12px] text-[#252525]">Talk To Us</p>

            <a
              href="#contact"
              className="mt-1 inline-block font-[Impact,'Arial_Narrow',sans-serif] text-[15px] font-bold tracking-wide text-[#101521] transition-colors hover:text-[#e9474b]"
            >
              Get In Touch
            </a>

            {/* Phone Number */}
            <a
              href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
              className="mt-2 flex w-fit items-center gap-2 text-[13px] font-semibold text-[#101521] transition-colors hover:text-[#e9474b]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {phoneNumber}
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-[24px]">
            <p className="mb-[13px] text-[12px] text-[#252525]">
              Follow Us On:
            </p>

            <div className="flex flex-wrap gap-[11px]">
              <SocialLink
                href="https://www.facebook.com/shreesaisteelbbsr/"
                label="Visit Shree Sai Steel on Facebook"
              >
                <FacebookIcon />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/"
                label="Visit us on Instagram"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink
                href="https://share.google/BhTa3rLHGmz8zJ8Ra"
                label="View our Google Business Profile"
              >
                <GoogleBusinessIcon />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Pages */}
        <FooterLinkColumn title="Pages" links={pages} />

        {/* Products */}
        <FooterLinkColumn title="Our Products" links={services} />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d4cece]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-5 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-[5.2%]">
          <p className="text-[12px] text-[#101521]">
            © {new Date().getFullYear()} Shree Sai Steel. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#privacy"
              className="text-[12px] text-[#101521] transition-colors hover:text-[#e9474b]"
            >
              Privacy &amp; Policy
            </a>

            <a
              href="#terms"
              className="text-[12px] text-[#101521] transition-colors hover:text-[#e9474b]"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
