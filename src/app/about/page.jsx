"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <section>
      {/* Banner Section */}
      <div
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/home-section/Rectangle30.png')" }}
      >
        <h1 className="text-4xl font-bold text-lightBackground bg-black bg-opacity-40 px-4 py-2 rounded">
          About Us
        </h1>
      </div>

      {/* Company History Section */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold text-primary text-center">Our Story</h2>
        <p className="text-grayDark text-lg text-center max-w-3xl mx-auto">
          Founded in 2023, our company is dedicated to providing exquisite artificial jewelry that combines elegance and affordability. 
          Our passion for craftsmanship and design drives us to create unique pieces that resonate with our customers' style.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-lightBackground py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-grayDark">
              To offer premium-quality artificial jewelry that empowers individuals to express themselves while maintaining affordability.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-grayDark">
              To become a global leader in the artificial jewelry market by prioritizing design, quality, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="/images/team/member1.jpg" // Replace with your team member's image
                alt="Team Member 1"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mt-4">Jane Doe</h3>
            <p className="text-grayDark">Founder & CEO</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="/images/team/member2.jpg" // Replace with your team member's image
                alt="Team Member 2"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mt-4">John Smith</h3>
            <p className="text-grayDark">Head of Design</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="/images/team/member3.jpg" // Replace with your team member's image
                alt="Team Member 3"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mt-4">Alice Brown</h3>
            <p className="text-grayDark">Marketing Lead</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="/images/team/member4.jpg" // Replace with your team member's image
                alt="Team Member 4"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mt-4">Mike Johnson</h3>
            <p className="text-grayDark">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
