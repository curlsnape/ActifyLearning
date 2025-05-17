import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa6";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const features = {
    starter: [
      { text: "All tools you need to manage payments", available: true },
      { text: "No setup, monthly, or hidden fees", available: true },
      { text: "Comprehensive security", available: true },
      { text: "Get hundreds of feature updates", available: false },
      { text: "Payouts to your bank account", available: false },
      { text: "Financial reconciliation and reporting", available: false },
      { text: "24×7 phone, chat, and email support", available: false },
      { text: "Robust developer platform", available: false },
    ],
    premium: [
      { text: "All tools you need to manage payments", available: true },
      { text: "No setup, monthly, or hidden fees", available: true },
      { text: "Comprehensive security", available: true },
      { text: "Get hundreds of feature updates", available: true },
      { text: "Payouts to your bank account", available: true },
      { text: "Financial reconciliation and reporting", available: false },
      { text: "24×7 phone, chat, and email support", available: false },
      { text: "Robust developer platform", available: false },
    ],
    enterprise: [
      { text: "All tools you need to manage payments", available: true },
      { text: "No setup, monthly, or hidden fees", available: true },
      { text: "Comprehensive security", available: true },
      { text: "Get hundreds of feature updates", available: true },
      { text: "Payouts to your bank account", available: true },
      { text: "Financial reconciliation and reporting", available: true },
      { text: "24×7 phone, chat, and email support", available: true },
      { text: "Robust developer platform", available: true },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto  py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Built for business teams like yours
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          At Actify, we prioritize markets where innovation, technology, and
          investment converge
          <br className="max-sm:hidden" />
          to create lasting value and foster economic progress.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative flex items-center">
          <span className={`mr-3 text-sm ₹{!isYearly ? "font-semibold" : ""}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-gray-200"
            role="switch"
            aria-checked={isYearly}
          >
            <span
              className={`${
                isYearly ? "translate-x-5" : "translate-x-0"
              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
          </button>
          <span className={`ml-3 text-sm ₹{isYearly ? "font-semibold" : ""}`}>
            Yearly
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Starter Plan */}
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
          <p className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ₹2999
            </span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            ₹2000 per month, paid annually
          </p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-gray-800"
          >
            Get started
          </a>
          <ul className="mt-8 space-y-4">
            {features.starter.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 ${
                  !feature.available ? "line-through text-gray-400" : ""
                }`}
              >
                {feature.available ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaBan color="red" />
                )}
                <span className="text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="relative rounded-lg border-2 border-blue-500 bg-white p-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Most popular
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Premium</h3>
          <p className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ₹5000
            </span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            ₹4000 per month, paid annually
          </p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get started
          </a>
          <ul className="mt-8 space-y-4">
            {features.premium.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 ${
                  !feature.available ? "line-through text-gray-400" : ""
                }`}
              >
                {feature.available ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaBan color="red" />
                )}
                <span className="text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
          <p className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ₹9999
            </span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            ₹7999 USD per month, paid annually
          </p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-gray-800"
          >
            Get started
          </a>
          <ul className="mt-8 space-y-4">
            {features.enterprise.map((feature, index) => (
              <>
                <li
                  key={index}
                  className={`flex items-start gap-2 ${
                    !feature.available ? "line-through text-gray-400" : ""
                  }`}
                >
                  {feature.available ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <FaBan color="red" />
                  )}
                  <span className="text-sm">{feature.text}</span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
