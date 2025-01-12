import React from 'react'
import Slider from '../slider/Slider'
import Image from 'next/image'
import Link from 'next/link'

const Banner1 = () => {
    return (
        <div>
            <Slider>
                {
                    [
                        {
                            id:1,
                            slide:
                                <section className="bg-lightBackground max-h-[90vh] w-full flex md:px-8">
                                    <div className="container min-h-[30vh] md:min-h-[500px] relative mx-auto md:rounded-lg overflow-hidden md:my-8">
                                        {/* Text Content */}
                                        <div className="text-sm  absolute top-0 z-10 p-8 h-full w-full text-left bg-black bg-opacity-50 space-y-6 text-white flex justify-end flex-col">
                                            <h1 className="text-xl md:text-5xl font-bold ">
                                                Discover Exquisite Artificial Jewelry
                                            </h1>
                                            <p className="max-sm:hidden text-grayDark md:text-lg">
                                                Add elegance and charm to your style with our exclusive collection of necklaces, bracelets, and more.
                                            </p>
                                            <div className="sm:space-x-4 gap-4 flex text-textPrimary">
                                                <Link href="/products">
                                                    <p className="bg-primary w-fit text-lightBackground px-2 py-1 md:px-7 md:py-3 rounded hover:bg-secondary">
                                                        Shop Now
                                                    </p>
                                                </Link>
                                                <Link href="/about">
                                                    <p className="bg-secondary w-fit text-lightBackground px-2 py-1 md:px-6 md:py-3 rounded hover:bg-primary">
                                                        Learn More
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="flex absolute top-0 w-full justify-center min-h-[500px] h-full items-center">
                                            <Image
                                                src="/images/banner/slide1.jpg" // Replace with your image path
                                                alt="Artificial Jewelry"
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </section>
                        },
                        {
                            id:2,
                            slide:
                                <section className="bg-lightBackground max-h-[90vh] w-full flex md:px-8">
                                    <div className="container min-h-[30vh] md:min-h-[500px] relative mx-auto md:rounded-lg overflow-hidden md:my-8">
                                        {/* Text Content */}
                                        <div className="text-sm  absolute top-0 z-10 p-8 h-full w-full text-left bg-black bg-opacity-50 space-y-6 text-white flex justify-end flex-col">
                                            <h1 className="text-xl md:text-5xl font-bold ">
                                                Discover Exquisite Artificial Jewelry
                                            </h1>
                                            <p className="max-sm:hidden text-grayDark md:text-lg">
                                                Add elegance and charm to your style with our exclusive collection of necklaces, bracelets, and more.
                                            </p>
                                            <div className="sm:space-x-4 gap-4 flex text-textPrimary">
                                                <Link href="/products">
                                                    <p className="bg-primary w-fit text-lightBackground px-2 py-1 md:px-7 md:py-3 rounded hover:bg-secondary">
                                                        Shop Now
                                                    </p>
                                                </Link>
                                                <Link href="/about">
                                                    <p className="bg-secondary w-fit text-lightBackground px-2 py-1 md:px-6 md:py-3 rounded hover:bg-primary">
                                                        Learn More
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="flex absolute top-0 w-full justify-center min-h-[500px] h-full items-center">
                                            <Image
                                                src="/images/banner/slide2.png" // Replace with your image path
                                                alt="Artificial Jewelry"
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </section>
                        },
                        {
                            id:3,
                            slide:
                                <section className="bg-lightBackground max-h-[90vh] w-full flex md:px-8">
                                    <div className="container min-h-[30vh] md:min-h-[500px] relative mx-auto md:rounded-lg overflow-hidden md:my-8">
                                        {/* Text Content */}
                                        <div className="text-sm  absolute top-0 z-10 p-8 h-full w-full text-left bg-black bg-opacity-50 space-y-6 text-white flex justify-end flex-col">
                                            <h1 className="text-xl md:text-5xl font-bold ">
                                                Discover Exquisite Artificial Jewelry
                                            </h1>
                                            <p className="max-sm:hidden text-grayDark md:text-lg">
                                                Add elegance and charm to your style with our exclusive collection of necklaces, bracelets, and more.
                                            </p>
                                            <div className="sm:space-x-4 gap-4 flex text-textPrimary">
                                                <Link href="/products">
                                                    <p className="bg-primary w-fit text-lightBackground px-2 py-1 md:px-7 md:py-3 rounded hover:bg-secondary">
                                                        Shop Now
                                                    </p>
                                                </Link>
                                                <Link href="/about">
                                                    <p className="bg-secondary w-fit text-lightBackground px-2 py-1 md:px-6 md:py-3 rounded hover:bg-primary">
                                                        Learn More
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="flex absolute top-0 w-full justify-center min-h-[500px] h-full items-center">
                                            <Image
                                                src="/images/banner/slide3.jpg" // Replace with your image path
                                                alt="Artificial Jewelry"
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </section>
                        },
                        {
                            id:4,
                            slide:
                                <section className="bg-lightBackground max-h-[90vh] w-full flex md:px-8">
                                    <div className="container min-h-[30vh] md:min-h-[500px] relative mx-auto md:rounded-lg overflow-hidden md:my-8">
                                        {/* Text Content */}
                                        <div className="text-sm  absolute top-0 z-10 p-8 h-full w-full text-left bg-black bg-opacity-50 space-y-6 text-white flex justify-end flex-col">
                                            <h1 className="text-xl md:text-5xl font-bold ">
                                                Discover Exquisite Artificial Jewelry
                                            </h1>
                                            <p className="max-sm:hidden text-grayDark md:text-lg">
                                                Add elegance and charm to your style with our exclusive collection of necklaces, bracelets, and more.
                                            </p>
                                            <div className="sm:space-x-4 gap-4 flex text-textPrimary">
                                                <Link href="/products">
                                                    <p className="bg-primary w-fit text-lightBackground px-2 py-1 md:px-7 md:py-3 rounded hover:bg-secondary">
                                                        Shop Now
                                                    </p>
                                                </Link>
                                                <Link href="/about">
                                                    <p className="bg-secondary w-fit text-lightBackground px-2 py-1 md:px-6 md:py-3 rounded hover:bg-primary">
                                                        Learn More
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="flex absolute top-0 w-full justify-center min-h-[500px] h-full items-center">
                                            <Image
                                                src="/images/banner/slide4.jpg" // Replace with your image path
                                                alt="Artificial Jewelry"
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </section>
                        },
                        {
                            id:5,
                            slide:
                                <section className="bg-lightBackground max-h-[90vh] w-full flex md:px-8">
                                    <div className="container min-h-[30vh] md:min-h-[500px] relative mx-auto md:rounded-lg overflow-hidden md:my-8">
                                        {/* Text Content */}
                                        <div className="text-sm  absolute top-0 z-10 p-8 h-full w-full text-left bg-black bg-opacity-50 space-y-6 text-white flex justify-end flex-col">
                                            <h1 className="text-xl md:text-5xl font-bold ">
                                                Discover Exquisite Artificial Jewelry
                                            </h1>
                                            <p className="max-sm:hidden text-grayDark md:text-lg">
                                                Add elegance and charm to your style with our exclusive collection of necklaces, bracelets, and more.
                                            </p>
                                            <div className="sm:space-x-4 gap-4 flex text-textPrimary">
                                                <Link href="/products">
                                                    <p className="bg-primary w-fit text-lightBackground px-2 py-1 md:px-7 md:py-3 rounded hover:bg-secondary">
                                                        Shop Now
                                                    </p>
                                                </Link>
                                                <Link href="/about">
                                                    <p className="bg-secondary w-fit text-lightBackground px-2 py-1 md:px-6 md:py-3 rounded hover:bg-primary">
                                                        Learn More
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="flex absolute top-0 w-full justify-center min-h-[500px] h-full items-center">
                                            <Image
                                                src="/images/banner/slide2.png" // Replace with your image path
                                                alt="Artificial Jewelry"
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </section>
                        },
                        
                    ]
                }
            </Slider>
        </div>
    )
}

export default Banner1
