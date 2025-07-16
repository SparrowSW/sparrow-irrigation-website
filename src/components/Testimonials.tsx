import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "New Cairo",
      property: "Villa Owner",
      text: "Finally, an irrigation controller that speaks my language! The Arabic interface makes it so easy to program. My garden has never looked better.",
      rating: 5
    },
    {
      name: "Mariam El-Sayed",
      location: "Sheikh Zayed",
      property: "Garden Enthusiast",
      text: "The seasonal adjustment feature is perfect for Egypt's weather. I don't have to reprogram it every season - it just works!",
      rating: 5
    },
    {
      name: "Khaled Ibrahim",
      location: "6th of October",
      property: "Villa Owner",
      text: "Local support made all the difference. When I had questions during installation, the Sparrow team was just a phone call away.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Egyptian Villa Owners Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of satisfied customers across Egypt
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.property}, {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}