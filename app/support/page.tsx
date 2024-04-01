// app/support/page.tsx

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc pl-6">
          <li>How do I create a new pipeline?</li>
          <li>How can I troubleshoot pipeline errors?</li>
          <li>What are the supported data sources?</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Contact Support</h2>
        <p className="mb-4">If you need further assistance, please contact our support team:</p>
        <ul>
          <li>Email: support@pipelinemanagement.com</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>
      </div>
    </div>
  );
}
