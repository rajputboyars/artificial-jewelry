"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CategoryRedirectPage = () => {
    const router = useRouter();

    useEffect(() => {
        
            // Redirect to the products page with the category as a filter
            router.push(`/`);
        
    }, [ router]);

    return (
        <div className="h-screen flex justify-center items-center w-screen">
            <div className="text-5xl">Loading......</div>
        </div>
    ); // Since we're redirecting, we don't need to render anything
};

export default CategoryRedirectPage;
