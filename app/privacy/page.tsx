import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Rugby Technologies",
  description: "How Rugby Technologies handles personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains what information Rugby Technologies receives, why it is used, and the choices available to you."
    >
      <LegalSection title="1. Information we receive">
        <p>
          This website does not use an account or contact form. If you email
          Rugby Technologies, we receive the information you choose to send,
          such as your name, email address, organization, project details, and
          attachments.
        </p>
        <p>
          Vercel Web Analytics may collect limited technical information about
          visits, including the page viewed, time, referrer, browser, operating
          system, device type, and approximate location. Vercel states that this
          analytics service uses anonymized data and does not use third-party
          cookies.
        </p>
      </LegalSection>

      <LegalSection title="2. How information is used">
        <p>
          Information is used to answer inquiries, prepare proposals, deliver
          and support agreed services, process payments, maintain business and
          accounting records, improve the website, protect systems, and meet
          legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="3. Payments through PayMongo">
        <p>
          PayMongo is the default payment gateway. When you pay through
          PayMongo, it may collect identity, contact, device, location, and
          financial information needed to process the transaction, prevent
          fraud, and comply with law. Payment credentials are handled by
          PayMongo and its payment partners under their own privacy and security
          practices. Rugby Technologies may receive the amount, payment status,
          transaction reference, and masked payment details, but does not
          receive or store your full card number or security code.
        </p>
        <p>
          Review the{" "}
          <a href="https://www.paymongo.com/privacy">PayMongo Privacy Policy</a>{" "}
          for current details about its collection, use, sharing, retention,
          security, and data subject rights.
        </p>
      </LegalSection>

      <LegalSection title="4. Service providers and disclosure">
        <p>
          Information may be handled by service providers needed to operate the
          business, including Vercel for website hosting and analytics and
          PayMongo for payments. Information may also be disclosed when required
          by law, to protect legal rights or systems, or with your direction.
          Personal information is not sold.
        </p>
      </LegalSection>

      <LegalSection title="5. Retention and security">
        <p>
          Information is kept only as long as reasonably needed for inquiries,
          active services, support, accounting, dispute handling, and legal
          obligations. Reasonable administrative and technical safeguards are
          used, but no online transmission or storage method is completely
          secure.
        </p>
      </LegalSection>

      <LegalSection title="6. Your privacy rights">
        <p>
          Subject to applicable law, you may request access, correction,
          deletion, or restriction of your personal information, object to
          certain processing, withdraw consent where consent is the basis, or
          raise a concern with the Philippine National Privacy Commission.
        </p>
        <p>
          Send privacy requests to{" "}
          <a href="mailto:seanaguilar698@gmail.com">seanaguilar698@gmail.com</a>
          . Reasonable identity verification may be required before a request is
          completed.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to this policy">
        <p>
          This policy may be updated when services, providers, or legal duties
          change. The effective date at the top identifies the current version.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
