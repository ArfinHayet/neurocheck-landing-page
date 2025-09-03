"use client";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    topic: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      console.log("Form submitted:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ topic: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section
  id="contact"
  className="max-w-screen mx-auto px-4 py-12 md:py-20 md:px-8 lg:px-18 bg-gray-50"
>
  <div>
    <div>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-3 md:mb-6 text-gray-800">
        Get in Touch <span className="text-secondary">With Us</span>
      </h2>
      <p className="md:text-lg text-sm text-center text-secondary mb-12 max-w-4xl mx-auto">
        Have questions or need assistance? Our team is here to help. Reach
        out to us anytime for support, guidance, or information about
        Neurocheckpro and our diagnostic services.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-12 md:scale-95 lg:scale-100">
      {/* Left side */}
      <div className="lg:w-1/3 bg-primary p-6 md:p-10 text-white rounded-xl order-1">
        <div className="md:mb-8 mb-6">
          <div className="flex gap-2 items-center mb-2 md:mb-4 text-base md:text-xl">
            <FaPhone /> <h3 className=" font-semibold">Phone</h3>
          </div>
          <p className="mb-2 text-sm md:text-lg">Available: 08:30 AM - 10:30 PM</p>
          <p className="font-medium text-sm md:text-lg">
            +44 161 123 4567
            <span className="font-normal">(Whatsapp available)</span>
          </p>
        </div>

        <div className="md:mb-8 mb-6">
          <div className="flex gap-2 items-center mb-2 md:mb-4 text-base md:text-xl">
            <MdEmail size={18} />
            <h3 className=" font-semibold">Email</h3>
          </div>
          <p className="text-sm md:text-lg font-medium">joykraft@gmail.com</p>
        </div>

        <div>
          <div className="flex gap-2 items-center mb-2 md:mb-4 text-base md:text-xl">
            <FaLocationDot />
            <h3 className=" font-semibold">Location</h3>
          </div>
          <p className="text-sm md:text-lg">
            23 High Street Manchester, Greater Manchester, MI 446, United
            Kingdom
          </p>
        </div>
      </div>

      {/* Right side  */}
      <div className="lg:w-2/3 bg-white p-6 md:px-12 md:py-18 rounded-lg border border-gray-300 order-2">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          <h3 className="md:text-xl font-semibold mb-2 md:mb-6 text-gray-500">
            Speak with us through email!
          </h3>
          <p className="text-gray-600 mb-6 flex-1 text-sm md:text-lg">
            Tell us about your query - you will be prompted to provide
            contact details and a message, then a sales representative will
            contact you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="topic"
              name="topic"
              placeholder="Your query topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:[#114654] text-sm"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your business email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:[#114654] text-sm"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              placeholder="Describe your requirements here"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:[#114654]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 px-6 rounded-md hover:opacity-80 transition duration-300 font-medium flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Queries"
            )}
          </button>

          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

  );
}
