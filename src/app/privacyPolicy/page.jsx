import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section
      className="pt-10 pb-24 md:pt-[15vh] md:pb-20 
                 max-w-screen mx-auto px-4 md:px-14 
                  relative "
    >
      <Link href="/">
        <button className="mb-2 underline cursor-pointer">Back to Home</button>
      </Link>
      <div className="space-y-2">
        <h1 className=" font-bold text-xl md:text-3xl mb-4">
          Privacy Policy – NeuroCheck Pro
        </h1>
        <p className="">
          <span className="font-semibold">Effective Date: </span> 20.09.2025
        </p>
        <p>
          <span className="font-semibold">NeuroCheck Pro </span>(“we”, “our”,
          “us”) is committed to protecting the privacy of users in the UK. This
          Privacy Policy explains how we collect, use, store, and share your
          personal data in compliance with the
          <span className="font-semibold">
            UK General Data Protection Regulation (UK GDPR)
          </span>
          and the
          <span className="font-semibold">Data Protection Act 2018.</span>
        </p>
        <p>
          By using our mobile application
          <span className="font-semibold">NeuroCheck Pro </span>(“App”), you
          consent to the practices described in this policy.
        </p>
      </div>

      <div className="my-6 space-y-2">
        <h1 className="font-bold text-xl">1. Data Controller</h1>
        <p>The data controller responsible for your personal information is:</p>
        <p>
          <p className="font-semibold">Neuro Check Pro </p>
          <p>Email: dev.neurocheckpro@gmail.com </p>
          <p>
            Address: 3rd Floor, 86-90 Paul Street, London, England, United
            Kingdom, EC2A 4NE
          </p>
          You can contact us regarding privacy questions or to exercise your
          rights.
        </p>
      </div>
      {/* 2 */}
      <div className="mb-6 space-y-2">
        <h1 className="text-xl font-bold ">2. Information We Collect</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              2.1 Personal Information
            </h2>
            <p>We may collect information that identifies you, including:</p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Full name, email address, phone number</li>
              <li>Date of birth, gender, and profile photo</li>
              <li>
                Account credentials and user type (patient, clinician, admin)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              2.2 Health and Medical Data
            </h2>
            <p>
              As a healthcare-related app, we collect special category data
              under UK GDPR, including:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Daily attendance, tasks, and work submissions</li>
              <li>Health assessments, reports, and clinician notes</li>
              <li>
                Uploaded images, documents, or videos related to healthcare
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              2.3 Device and Technical Data
            </h2>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Device type, operating system, and app version</li>
              <li>IP address, device identifiers, and browser type</li>
              <li>
                Usage and analytics data (app interactions, crash reports)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">2.4 Location Data</h2>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Track attendance or task submissions</li>
              <li>Improve app services and user experience</li>
            </ul>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="mb-6 space-y-2">
        <h1 className="text-xl font-bold ">
          3. Legal Basis for Processing (UK GDPR)
        </h1>
        <p>We process your data based on the following lawful grounds:</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>
            <span className="font-semibold">Consent: </span>You agree to share
            your personal and health information.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Contract: </span>Processing is
            necessary to provide our services.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Legal Obligation: </span>To comply
            with UK law or regulatory requirements.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Legitimate Interests: </span>For app
            security, fraud prevention, or service improvement.
          </li>
        </ul>
        <p>
          For <span className="font-semibold">health-related data, </span>your
          explicit consent is required under UK GDPR.
        </p>
      </div>
      {/* 4 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">4. How We Use Your Information</h1>
        <p>We use your information to: </p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Provide, maintain, and improve the App and services </li>
          <li>
            {" "}
            Schedule and manage appointments or tasks Monitor attendance, work
            submissions, and performance{" "}
          </li>
          <li>Send notifications, reminders, and updates</li>
          <li>Respond to inquiries and provide support</li>
          <li>Comply with legal obligations</li>
          <li>Analyze usage trends for service optimization</li>
        </ul>
      </div>
      {/* 5 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">5. How We Share Your Information</h1>
        <p> We may share your information: </p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>
            <span className="font-semibold">
              With Healthcare Professionals:{" "}
            </span>
            facilitate appointments, consultations, or treatments
          </li>
          <li>
            <span className="font-semibold">Service Providers: </span>For
            hosting, analytics, and technical support
          </li>
          <li>
            <span className="font-semibold">Legal Authorities: </span>When
            required by law or court order
          </li>
          <li>
            <span className="font-semibold">Business Transfers: </span>In case
            of a merger, acquisition, or sale
          </li>
        </ul>
        <p>
          We <span className="font-semibold">do not sell or rent </span>your
          personal data to third parties.
        </p>
      </div>
      {/* 6 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">6. International Transfers</h1>
        <p>
          Your data may be transferred outside the UK. We ensure that transfers
          comply with UK GDPR via:
        </p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Standard contractual clauses approved by the UK government</li>
          <li>Adequate data protection measures</li>
        </ul>
      </div>
      {/* 7 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">7. Data Retention</h1>
        <p>
          We keep your personal and health data only as long as necessary to
          provide services or comply with legal obligations.{" "}
        </p>
        <p>
          Upon request, we will delete your personal data unless retention is
          required for:
        </p>
        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Legal compliance</li>
          <li>Dispute resolution</li>
          <li>Fraud prevention</li>
        </ul>
      </div>
      {/* 8 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">8. Your Rights under UK GDPR</h1>
        <p>You have the following rights:</p>

        <ol className="text-sm list-decimal list-inside space-y-1">
          <li>
            <span className="font-semibold">Access: </span>Request a copy of
            your personal data
          </li>
          <li>
            <span className="font-semibold">Rectification: </span>
            Correct inaccurate or incomplete data
          </li>
          <li>
            <span className="font-semibold">Erasure: </span>Request deletion of
            your data (right to be forgotten)
          </li>
          <li>
            <span className="font-semibold">Restriction: </span>Limit processing
            of your data
          </li>
          <li>
            <span className="font-semibold">Objection: </span>
            Object to processing for marketing or legitimate interests
          </li>
          <li>
            <span className="font-semibold">Data Portability: </span>Receive
            your data in a portable format
          </li>
          <li>
            <span className="font-semibold">Withdraw Consent: </span>At any time
            for processing based on consent
          </li>
        </ol>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:neurocheckpro.contact@gmail.com"
            className="text-blue-600 hover:underline"
          >
            neurocheckpro.contact@gmail.com
          </a>
          .
        </p>
      </div>
      {/* 9 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">9. Data Security</h1>
        <p>
          We implement{" "}
          <span className="font-semibold">
            appropriate technical and organizational measures{" "}
          </span>
          to protect your data from unauthorized access, disclosure, alteration,
          or destruction, including encryption and secure servers.
        </p>
        <p>
          However, no system is completely secure, and you acknowledge the
          inherent risks of electronic data transmission.
        </p>
      </div>
      {/* 10 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">10. Children’s Privacy</h1>
        <p>
          The App is
          <span className="font-semibold">
            not intended for users under 13.
          </span>
          We do not knowingly collect data from children.
        </p>
        <p>
          If we discover that we have collected data from a child, it will be
          deleted immediately.
        </p>
      </div>

      {/* 11 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">11. Third-Party Services</h1>
        <p>Our App may integrate with third-party services, including:</p>

        <ul className="text-sm list-disc list-inside space-y-1">
          <li>Cloud hosting providers</li>
          <li>Analytics and push notification services</li>
        </ul>
        <p>
          These third parties may process data according to their own privacy
          policies. We are not responsible for their practices.
        </p>
      </div>
      {/* 12 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">12. Changes to This Policy</h1>
        <p>
          We may update this policy. Changes will be notified via the App or
          email.
        </p>
        <p>
          Please check this page regularly. Continued use of the App indicates
          acceptance of the updated policy.
        </p>
      </div>
      {/* 13 */}
      <div className="mb-6 space-y-2">
        <h1 className="font-bold text-xl">13. Contact Information</h1>
        <p>
          For privacy-related inquiries, data access requests, or complaints:
        </p>
        <ul className="text-sm list-inside space-y-1">
          <li>
            <span className="font-semibold">Email: </span>
            dev.neurocheckpro@gmail.com{" "}
          </li>
          <li>
            <span className="font-semibold">Address: </span>3rd Floor, 86-90
            Paul Street, London, England, United Kingdom, EC2A 4NE
          </li>
          <li>
            <span className="font-semibold">Phone: </span> +44 7451 248601
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
