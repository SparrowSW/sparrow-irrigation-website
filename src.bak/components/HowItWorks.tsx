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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex items-center justify-center">
            <div className="glass-card rounded-2xl p-8 h-96 w-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/50 rounded-lg mx-auto mb-4"></div>
                <p className="text-muted-foreground">How It Works Diagram/Image Placeholder</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-16 text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Simple as 1-2-3
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Get professional irrigation control in three easy steps
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-right glass-card p-8 transition-all duration-300 hover:shadow-xl">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center ml-auto mb-6">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="text-primary font-bold text-lg mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}