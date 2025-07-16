export default function WhyChooseSparrow() {
  const reasons = [
    {
      title: "Made for Egypt",
      description: "Engineered specifically for Egypt's climate, water quality, and garden types",
      icon: "🇪🇬"
    },
    {
      title: "Arabic First Design",
      description: "First irrigation controller with native Arabic interface, designed by Egyptians for Egyptians",
      icon: "📝"
    },
    {
      title: "Proven Reliability",
      description: "Traditional mechanical design meets modern engineering for unmatched reliability",
      icon: "✅"
    },
    {
      title: "Local Support",
      description: "Egyptian customer service team ready to help with installation and troubleshooting",
      icon: "📞"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Villa Owners Choose Sparrow
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Built by Egyptians, for Egyptian gardens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}