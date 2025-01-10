"use client";

import { useState } from "react";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Sign In",
    "Delivery Address",
    "Payment Option",
    "Complete Order",
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <div className="space-y-4">
              <button className="flex items-center w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img
                  src="/images/icons/register.png"
                  alt="Register"
                  className="h-6 w-6 mr-2"
                />
                Register
              </button>
              <button className="flex items-center w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img
                  src="/images/icons/login.png"
                  alt="Log In"
                  className="h-6 w-6 mr-2"
                />
                Log In
              </button>
              <button className="flex items-center w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img
                  src="/images/icons/google.png"
                  alt="Google"
                  className="h-6 w-6 mr-2"
                />
                Google
              </button>
              <button className="flex items-center w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img
                  src="/images/icons/facebook.png"
                  alt="Facebook"
                  className="h-6 w-6 mr-2"
                />
                Facebook
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-4 border rounded-lg"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-4 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-4 border rounded-lg"
              />
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Payment Option</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Credit Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>PayPal</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Complete Order</h2>
            <p>Thank you for your purchase! Your order is being processed.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="flex items-center space-x-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center w-full">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full relative ${
                index + 1 === currentStep
                  ? "bg-secondary text-primary font-bold"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
                <span className={`absolute ${index % 2 == 0 ? "-top-8" :"top-8"} text-nowrap max-md:hidden`}>{step}</span>
              <span className={` ${
                index + 1 === currentStep
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}>{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-full h-1 bg-gray-300 flex-1"></div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">{renderStepContent()}</div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <p>Subtotal: $320.00</p>
          <p>Shipping: Free</p>
          <p>2 Items</p>
          <p className="font-bold text-lg mt-4">Total: $530.00</p>
          <button
            onClick={nextStep}
            className="w-full bg-secondary text-white px-4 py-2 mt-4 rounded-lg"
          >
            {currentStep === steps.length ? "Finish" : "Continue"}
          </button>
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="w-full bg-gray-200 text-gray-700 px-4 py-2 mt-4 rounded-lg"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
