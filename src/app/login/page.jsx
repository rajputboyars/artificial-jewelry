"use client"
import axiosInstance from "@/axiosInstance";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
// pages/login.js
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);  // Track loading state
    const [error, setError] = useState("");  // Store error messages
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };

        setLoading(true);
        setError("");  // Reset any previous errors

        try {
            const response = await axiosInstance.post('/api/auth/login', userData);
            console.log('Login successful:', response.data);
            // Redirect to login page or home page
            router.push('/');  // Redirect to the login page
        } catch (err) {
            console.error('Login failed:', err);
            setError("Login failed!!!... Please try again.");
        } finally {
            setLoading(false);
        }
        console.log("Logged in with", { email, password });
    };

    return (
        <div className="flex min-h-screen">

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

                        {/* Right side with Login form */}
                        <div className="md:w-1/2 w-full bg-background p-8 flex justify-center items-center border">
                            <div className="max-w-md w-full  shadow-xl p-8 rounded-lg overflow-hidden">
                                <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Login</h2>

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

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-yellow-600 focus:outline-none transition duration-300"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>

                                <div className="mt-4 text-center">
                                    <p className="text-textSecondary text-sm">Don't have an account? <a href="/register" className="text-primary font-medium">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}
