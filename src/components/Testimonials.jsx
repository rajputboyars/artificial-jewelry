// src/app/components/Testimonials.jsx
"use client";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily R.",
      feedback:
        "The jewelry is absolutely stunning! The quality exceeded my expectations.",
    },
    {
      id: 2,
      name: "Michael T.",
      feedback: "Amazing customer service and beautiful designs. Highly recommend!",
    },
    {
      id: 3,
      name: "Sophia L.",
      feedback:
        "I love my new earrings! Will definitely be buying more from this store.",
    },
  ];

  return (
    <section className="py-16 bg-grayLight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-textPrimary mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
            >
              <p className="text-grayDark italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-bold text-secondary">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
