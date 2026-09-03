import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions | Rugby Technologies",
  description: "Terms for working with Rugby Technologies.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="These terms explain the general conditions for using this website and working with Rugby Technologies. A signed proposal or project agreement may add or replace terms for a specific engagement."
    >
      <LegalSection title="1. Services and project agreements">
        <p>
          Rugby Technologies provides websites, custom software, automation,
          integrations, consulting, and related support. Each project&apos;s
          scope, deliverables, schedule, fees, payment milestones, and support
          terms will be set out in a written proposal or agreement.
        </p>
        <p>
          If these website terms conflict with a signed project agreement, the
          signed agreement controls for that project.
        </p>
      </LegalSection>

      <LegalSection title="2. Client responsibilities">
        <p>
          Clients must provide accurate information, content, access, decisions,
          and approvals on time. A delay in these items may move the delivery
          schedule. Clients are responsible for having the right to use all
          materials they provide.
        </p>
      </LegalSection>

      <LegalSection title="3. Fees and payment">
        <p>
          Fees and due dates appear in the applicable proposal or invoice.
          PayMongo is the default payment gateway unless another method is
          agreed in writing. Payments made through PayMongo are also subject to
          PayMongo&apos;s applicable terms and privacy practices.
        </p>
        <p>
          Work may pause when an invoice is overdue. Taxes, transaction costs,
          licenses, hosting, domains, and other third-party expenses are the
          client&apos;s responsibility when identified in the proposal or
          approved during the project.
        </p>
      </LegalSection>

      <LegalSection title="4. Changes, approvals, and delivery">
        <p>
          Requests outside the agreed scope may require a revised fee or
          schedule. Approval of a milestone confirms acceptance of the work
          shown for that milestone, subject to any written warranty or remedy in
          the project agreement.
        </p>
      </LegalSection>

      <LegalSection title="5. Ownership and licenses">
        <p>
          Unless the project agreement says otherwise, ownership of custom
          deliverables transfers after full payment. Rugby Technologies keeps
          ownership of pre-existing tools, methods, and reusable materials.
          Open-source software and third-party assets remain subject to their
          own licenses.
        </p>
      </LegalSection>

      <LegalSection title="6. Confidentiality">
        <p>
          Each party will use reasonable care to protect confidential
          information received for a project and will use it only for the work,
          legal compliance, or another purpose authorized in writing.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party services">
        <p>
          Projects may rely on providers such as hosting platforms, payment
          gateways, APIs, domain registrars, and software vendors. Their
          availability, security, pricing, and policies are outside Rugby
          Technologies&apos; control. Rugby Technologies is not responsible for
          failures caused solely by those providers, but will communicate known
          issues and provide reasonable assistance within the agreed scope.
        </p>
      </LegalSection>

      <LegalSection title="8. Warranties and liability">
        <p>
          Services will be delivered with reasonable skill and care. Except
          where required by law or stated in a signed agreement, no guarantee is
          made that a service will be uninterrupted or suitable for every
          purpose. To the extent permitted by law, liability is limited to the
          fees paid for the service that gave rise to the claim. Nothing here
          excludes rights or remedies that cannot legally be excluded.
        </p>
      </LegalSection>

      <LegalSection title="9. Suspension and termination">
        <p>
          Either party may end a project as allowed by its written agreement.
          Rugby Technologies may suspend work for overdue payment, unlawful
          instructions, security risk, or a material breach. Amounts due for
          completed work and committed third-party costs remain payable.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law and contact">
        <p>
          These terms are governed by the laws of the Republic of the
          Philippines. Questions may be sent to{" "}
          <a href="mailto:seanaguilar698@gmail.com">seanaguilar698@gmail.com</a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
