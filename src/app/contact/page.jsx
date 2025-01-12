"use client";

import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: "", email: "", message: "" }); // Clear form
    };

    return (
        <section>
            {/* Map Section */}
            <div className="w-full h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728915.0185890586!2d74.22931393505897!3d20.59368419041444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b0305e3cfc2f%3A0xb1d5a24465c3b5c1!2sIndia!5e0!3m2!1sen!2sin!4v1609234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded"
                    title="India Map"
                ></iframe>
            </div>


            {/* Contact Section */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-lightBackground p-8 rounded shadow">
                    <h2 className="text-3xl font-bold text-textPrimary mb-4">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            {/* <label
                                htmlFor="name"
                                className="block text-grayDark font-medium mb-2"
                            >
                                Name
                            </label> */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-grayLight rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            {/* <label
                                htmlFor="email"
                                className="block text-grayDark font-medium mb-2"
                            >
                                Email
                            </label> */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-grayLight rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            {/* <label
                                htmlFor="message"
                                className="block text-grayDark font-medium mb-2"
                            >
                                Message
                            </label> */}
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-grayLight rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your Message"
                                rows="2"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-lightBackground px-6 py-2 rounded hover:bg-secondary transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="bg-lightBackground p-8 rounded shadow space-y-4">
                    <h2 className="text-3xl font-bold text-textPrimary mb-4">
                        Contact Details
                    </h2>
                    <div>
                        <h3 className="text-xl font-bold text-secondary">Our Office</h3>
                        <p className="text-grayDark">123 Jewelry Street, City, Country</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-secondary">Email</h3>
                        <p className="text-grayDark">contact@jewelrywebsite.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-secondary">Phone</h3>
                        <p className="text-grayDark">+1 (123) 456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-secondary">Working Hours</h3>
                        <p className="text-grayDark">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
