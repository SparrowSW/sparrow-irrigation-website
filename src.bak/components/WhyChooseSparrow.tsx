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

  const productFeatures = [
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Villa Owners Choose Sparrow
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Built by Egyptians, for Egyptian gardens
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="glass-card rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-48 bg-white/50 rounded-lg mx-auto mb-4"></div>
                <p className="text-muted-foreground">Sparrow Controller Series Image Placeholder</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Key Features
            </h3>
            <div className="grid gap-4">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center glass-card p-8 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}