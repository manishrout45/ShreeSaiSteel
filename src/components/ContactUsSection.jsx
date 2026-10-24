import { useState } from "react";

const services = [
  "TMT Bars & Reinforcement Steel",
  "Structural Steel Products",
  "Steel Sheets & Plates",
  "Steel Pipes & Tubes",
  "Steel for Construction Projects",
  "Bulk Steel Supply",
  "Other Steel Requirements",
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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function ContactUsSection({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError("");

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Connect your backend or email service to receive enquiries.
        console.log("Shree Sai Steel enquiry:", formData);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      setSubmitError(
        "We couldn't submit your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "h-[50px] w-full min-w-0 border border-[#e5e5e5] bg-white px-[18px] text-[12px] text-[#171923] outline-none placeholder:text-[#777b83] transition-all duration-200 focus:border-[#171923] focus:ring-1 focus:ring-[#171923]/10";

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-[#252525] bg-cover bg-center bg-no-repeat px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[780px] lg:px-[7.7%] lg:py-[103px]"
      style={{
        backgroundImage: "url('https://img.magnific.com/free-photo/working-hard-building-man-construction-worker_1122-1849.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {/* Dark image overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/55"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Contact form panel */}
        <div className="w-full max-w-[548px] bg-[#e9474b] px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-[45px] lg:py-[45px]">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-2">
            <DiamondIcon />
            <span className="text-[11px] font-semibold uppercase tracking-wide">
              Let's Build Together
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-[34px] font-black uppercase leading-[1.15] tracking-wide sm:text-[40px]">
            Get In Touch
          </h2>

          {/* Description */}
          <p className="mt-7 text-[12px] leading-[1.8] text-white">
            Looking for reliable steel products for your construction or
            infrastructure project? Share your requirements with Shree Sai
            Steel using the form below. Our team will get in touch to discuss
            your steel requirements and help you find a suitable solution.
          </p>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mt-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* First name */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                aria-label="First name"
                autoComplete="given-name"
                className={inputClass}
                required
              />

              {/* Last name */}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                aria-label="Last name"
                autoComplete="family-name"
                className={inputClass}
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                aria-label="Email address"
                autoComplete="email"
                className={inputClass}
                required
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                aria-label="Phone number"
                autoComplete="tel"
                className={inputClass}
                required
              />

              {/* Company */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Business*"
                aria-label="Company or business"
                autoComplete="organization"
                className={inputClass}
                required
              />

              {/* Steel products dropdown */}
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-label="Choose a steel product or requirement"
                  className={`${inputClass} appearance-none pr-10 ${
                    formData.service
                      ? "text-[#171923]"
                      : "text-[#777b83]"
                  }`}
                  required
                >
                  <option value="" disabled>
                    Select Steel Requirement*
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-[#171923]"
                  aria-hidden="true"
                >
                  <path d="m5 7 5 5 5-5H5Z" />
                </svg>
              </div>

              {/* Additional message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell Us About Your Requirements"
                aria-label="Additional message and steel requirements"
                rows={4}
                className="col-span-1 min-h-[90px] w-full resize-y border border-[#e5e5e5] bg-white px-[18px] py-[15px] text-[12px] text-[#171923] outline-none transition-all duration-200 placeholder:text-[#777b83] focus:border-[#171923] focus:ring-1 focus:ring-[#171923]/10 sm:col-span-2 sm:h-[90px] sm:min-h-[90px]"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="group mt-[30px] inline-flex min-h-[43px] min-w-[148px] items-center justify-center gap-2 bg-white px-6 py-3 text-[12px] font-medium text-[#171923] transition-colors duration-300 hover:bg-[#171923] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#e9474b] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting
                ? "Submitting..."
                : submitted
                  ? "Enquiry Submitted"
                  : "Send Enquiry"}
              <ArrowIcon />
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-4 text-xs leading-5 text-white"
              >
                Thank you for contacting Shree Sai Steel. Your enquiry has
                been submitted successfully.
              </p>
            )}

            {submitError && (
              <p
                role="alert"
                className="mt-4 text-xs leading-5 text-white"
              >
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}