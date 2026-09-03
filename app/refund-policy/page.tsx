import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy | Rugby Technologies",
  description: "Refund terms for Rugby Technologies projects and services.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="This policy explains when project payments may be refunded and how approved refunds are handled through PayMongo. A signed project agreement may include more specific terms."
    >
      <LegalSection title="1. Project deposits">
        <p>
          An initial deposit reserves project time and becomes non-refundable
          once work begins. Before work begins, a cancellation request may be
          eligible for a refund after deducting any non-recoverable third-party
          costs already approved or incurred.
        </p>
      </LegalSection>

      <LegalSection title="2. Milestones and completed work">
        <p>
          Payments for completed or approved milestones are non-refundable. Work
          is considered approved when written approval is given or when the
          approval period stated in the project agreement expires without a
          reported issue.
        </p>
      </LegalSection>

      <LegalSection title="3. Unused prepaid work">
        <p>
          If a project ends before all prepaid work is completed, the unused
          balance may be refunded after deducting completed work, approved
          commitments, and non-recoverable third-party costs. A written
          calculation will be provided when a refund is approved.
        </p>
      </LegalSection>

      <LegalSection title="4. Cancellations, scope changes, and delays">
        <p>
          Client cancellation, a change in priorities, or a delay caused by
          missing content, access, feedback, or approval does not create a
          refund for completed work or reserved time already used. Any revised
          scope or schedule will be handled in writing.
        </p>
      </LegalSection>

      <LegalSection title="5. PayMongo refunds">
        <p>
          Rugby Technologies determines whether a payment is refundable under
          this policy and the applicable project agreement. If approved, a
          PayMongo payment will normally be refunded to the original payment
          method, subject to that method&apos;s refund window, available refund
          type, account balance requirements, and processing time.
        </p>
        <p>
          PayMongo currently supports full or partial refunds for many paid
          transactions, but restrictions vary. Card refunds can take up to 30
          days to appear, common e-wallet refunds may appear within 24 hours,
          and supported online bank refunds may take several banking days. Some
          payment methods have additional limits. QR Ph allows full refunds
          only. For Brankas payments through BDO, Metrobank, or Landbank,
          PayMongo returns the funds to Rugby Technologies for direct settlement
          with the client. UBP Online Banking payments cannot be refunded
          through PayMongo and require coordination with PayMongo support. The
          current{" "}
          <a href="https://docs.paymongo.com/docs/payment-acceptance-refunds">
            PayMongo refund guide
          </a>{" "}
          controls these processing limits and timelines.
        </p>
        <p>
          PayMongo does not return the original transaction fee to Rugby
          Technologies. If permitted by the project agreement and applicable
          law, that non-recoverable fee may be deducted from the refundable
          amount. No deduction will reduce a remedy required by law.
        </p>
      </LegalSection>

      <LegalSection title="6. Requesting a refund">
        <p>
          Email{" "}
          <a href="mailto:seanaguilar698@gmail.com">seanaguilar698@gmail.com</a>{" "}
          with the invoice or payment reference and the reason for the request.
          Requests will be reviewed against the project agreement, work
          completed, costs incurred, and PayMongo&apos;s payment-method rules.
        </p>
      </LegalSection>

      <LegalSection title="7. Legal rights">
        <p>
          Nothing in this policy limits refunds, corrections, chargeback rights,
          or other remedies required by applicable law. If this policy conflicts
          with a mandatory consumer protection rule, that rule controls.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
