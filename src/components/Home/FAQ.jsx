"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { FiPlus } from "react-icons/fi";

const faqData = [
  { q: "How accurate are Neurocheckpro assessments?", a: "Neurocheckpro assessments are designed by experts and use validated diagnostic methods, providing reliable results to help identify autism and ADHD in both children and adults." },
  { q: "Can I use Neurocheckpro for multiple family members?", a: "Yes, Neurocheckpro allows you to create separate profiles for each family member, making it easy to manage and track multiple assessments." },
  { q: "How long does each assessment take?", a: "Each assessment typically takes 15–30 minutes, depending on the type of evaluation and the individual’s responses." },
  { q: "Is Neurocheckpro suitable for adults as well as children?", a: "Absolutely. Neurocheckpro offers specialized assessments for both children and adults, ensuring accurate identification of autism, ADHD, or both conditions across age groups." },
  { q: "Do I need any prior medical knowledge to use the platform?", a: "YNo prior medical knowledge is required. The platform is user-friendly and guides you step-by-step through each assessment." },
  { q: "Can I access my results anytime online?", a: "Yes, once an assessment is complete, your results are securely stored online and can be accessed anytime through your Neurocheckpro account." },
  { q: " Are the assessments confidential and secure?", a: "Yes, all data is encrypted and stored securely. Your personal and assessment information remains confidential at all times." },
  { q: "How often should assessments be repeated?", a: "YIt is recommended to repeat assessments periodically, especially if there are changes in behavior or developmental progress, to ensure accurate monitoring over time." },
  { q: "Can Neurocheckpro replace a professional medical diagnosis?", a: "Neurocheckpro is a reliable screening and diagnostic support tool, but it does not replace a full medical evaluation by a qualified healthcare professional." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 mt-26 max-w-screen mx-auto px-4 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        
        {/* Left side */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to the most common questions about NeuroCheck.
          </p>
        </div>

        {/* Right side */}
        <div className="md:col-span-2">
          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqData.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                  >
                    {item.q}
                    <FiPlus
                      className="h-5 w-5 text-gray-600 transition-transform duration-300 ease-in-out
                      data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="px-4 pb-4 text-gray-600 overflow-hidden 
                  data-[state=open]:animate-slideDown 
                  data-[state=closed]:animate-slideUp"
                >
                  {item.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
