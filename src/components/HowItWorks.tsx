export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Model",
      description: "Select from Basic, Pro, or Elite based on your garden size and needs",
      icon: "📱"
    },
    {
      number: "02",
      title: "Professional Installation",
      description: "Our technicians install and configure your controller for optimal watering",
      icon: "🔧"
    },
    {
      number: "03",
      title: "Enjoy Your Garden",
      description: "Set your schedule and let Sparrow take care of the rest automatically",
      icon: "🌺"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Simple as 1-2-3
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get professional irrigation control in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{step.icon}</span>
              </div>
              <div className="text-blue-600 font-bold text-lg mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}