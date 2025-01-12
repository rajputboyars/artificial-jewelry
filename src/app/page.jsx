import FullWidthImageSection from "@/components/FullWidthImageSection";
import GetUpdates from "@/components/GetUpdates";
import ProductShowcase from "@/components/ProductShowcase";
import CustomSplitSection from "@/components/CustomSplitSection";
import Testimonials from "@/components/Testimonials";
import Banner1 from "@/components/banner/Banner1";
import CategoryComponent from "@/components/categories/CategoryComponent";
import FeaturedProducts1 from "@/components/FeaturedProducts/FeaturedProducts1";
import CategoryV1 from "@/components/category/CategoryV1";
import ComboAndGiftPacks from "@/components/ComboAndGiftPacks ";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>ARS Store</title>
      </Head>
      <main>
        <Banner1 />
        <CategoryV1 />
        <CategoryComponent />
        <FeaturedProducts1 />
        <ComboAndGiftPacks />
        <FullWidthImageSection />
        {/* <CategorySection/> */}
        <ProductShowcase />
        <CustomSplitSection
          imagePosition="right" // Image on the right
          backgroundColor="bg-primary" // Custom background color
          imageSrc="/images/home-section/Rectangle29.png"
          imageRotate={5} // Rotate image 5 degrees
          title="Exclusive Jewelry Collection"
          description="Our exclusive collection of jewelry pieces, designed for every special occasion."
          linkText="Shop Now"
          linkHref="/products"
        />
        <CustomSplitSection
          imagePosition="left" // Image on the right
          backgroundColor="none" // Custom background color
          imageSrc="/images/home-section/image4.png"
          imageRotate={0} // Rotate image 5 degrees
          title="Exclusive Jewelry Collection"
          titleColor="text-textPrimary"
          description="Our exclusive collection of jewelry pieces, designed for every special occasion."
          linkText="Shop Now"
          linkHref="/products"
        />
        <Testimonials />
        <GetUpdates />
      </main>
    </>
  );
}
