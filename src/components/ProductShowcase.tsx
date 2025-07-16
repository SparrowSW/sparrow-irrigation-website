export default function ProductShowcase() {
  const features = [
    {
      title: "Seasonal Adjustment",
      description: "Automatically adjust watering based on seasonal changes",
      icon: "🌿"
    },
    {
      title: "Arabic & English Support",
      description: "Full bilingual interface designed for Egyptian users",
      icon: "🗣️"
    },
    {
      title: "Traditional Reliable Design",
      description: "Proven rotating switches and buttons for easy operation",
      icon: "⚙️"
    },
    {
      title: "Weather-Resistant",
      description: "Built to withstand Egypt's harsh climate conditions",
      icon: "☀️"
    },
    {
      title: "Easy Installation",
      description: "Plug-and-play setup with local support available",
      icon: "🔧"
    },
    {
      title: "Locally Sourced",
      description: "Designed and manufactured in Egypt for our gardens",
      icon: "🇪🇬"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Built for Egyptian Gardens
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Every Sparrow controller is engineered with the Egyptian climate and user in mind, 
            combining international quality with local expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-48 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-500">Sparrow Controller Series</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Features
            </h3>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}