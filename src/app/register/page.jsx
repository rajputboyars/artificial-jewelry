"use client"
import axiosInstance from "@/axiosInstance";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
// pages/register.js
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);  // Track loading state
    const [error, setError] = useState("");  // Store error messages
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const userData = {
            username: email.split('@')[0],  // You can extract the username from email or customize it
            email,
            password,
        };
        setLoading(true);
        setError("");  // Reset any previous errors
        try {
            const response = await axiosInstance.post('/api/auth/register', userData);
            console.log('Registration successful:', response.data);
            // Redirect to login page or home page
            router("/login")
        } catch (err) {
            console.error('Registration failed:', err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
        console.log("Registered with", { email, password });
    };

    return (
        <div className="flex min-h-screen ">

            {
                loading ?
                    <>
                        <Loader />
                    </>
                    :
                    <>

                        {/* Left side with a background image */}
                        <div className="md:w-1/2 max-md:hidden flex justify-center items-center" >
                            <div className="relative max-w-md w-full rounded-lg overflow-hidden shadow-xl  ">
                                <div className="absolute bg-primary bg-opacity-50 z-10 w-full h-full" />
                                <img src="/images/banner/slide4.jpg" alt="" className="z-0 bg-cover w-full h-full bg-center" />
                            </div>
                        </div>

                        {/* Right side with Register form */}
                        <div className="md:w-1/2 w-full bg-background p-8 flex justify-center items-center border">
                            <div className="max-w-md w-full shadow-xl p-8 rounded-lg overflow-hidden">
                                <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Register</h2>

                                {/* Display error message if any */}
                                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-textPrimary font-medium">Email Address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label htmlFor="password" className="block text-textPrimary font-medium">Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-textPrimary font-medium">Confirm Password</label>
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                            placeholder="Confirm your password"
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-yellow-600 focus:outline-none transition duration-300"
                                        >
                                            {loading ? 'Registering...' : 'Register'}
                                        </button>
                                    </div>
                                </form>

                                <div className="mt-4 text-center">
                                    <p className="text-textSecondary text-sm">Already have an account? <a href="/login" className="text-primary font-medium">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </>
            }



        </div>
    );
}
