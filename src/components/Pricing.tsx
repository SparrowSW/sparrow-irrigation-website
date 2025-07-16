import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Sparrow Basic",
      stations: "2",
      price: "1,299",
      features: [
        "2 irrigation zones",
        "Arabic/English interface",
        "Seasonal adjustment",
        "Basic programming",
        "1-year warranty"
      ],
      popular: false
    },
    {
      name: "Sparrow Pro",
      stations: "4",
      price: "1,899",
      features: [
        "4 irrigation zones",
        "Arabic/English interface",
        "Advanced seasonal adjustment",
        "Multiple programs",
        "2-year warranty",
        "Free installation"
      ],
      popular: true
    },
    {
      name: "Sparrow Elite",
      stations: "8",
      price: "2,999",
      features: [
        "8 irrigation zones",
        "Full bilingual support",
        "Smart seasonal adjustment",
        "Advanced scheduling",
        "3-year warranty",
        "Free installation & setup"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Choose Your Controller
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect Sparrow controller for your garden size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular ? "border-blue-500 border-2" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    EGP {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{plan.stations} Stations</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                Pre-Order {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}