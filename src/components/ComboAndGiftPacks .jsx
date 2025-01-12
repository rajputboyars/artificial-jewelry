import React from 'react';

const ComboAndGiftPacks = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12">
                {/* Combo Pack Section */}
                <div className="flex flex-col md:flex-row  mb-16">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/images/products/combo-pack.jpg"
                            alt="Combo Pack"
                            className="rounded-lg aspect-square shadow-lg w-full h-[400px]"
                        />
                    </div>
                    {/* Description Section */}
                    <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Combo Packs
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our Combo Packs are the perfect blend of value and variety. 
                            These packs are designed to offer a mix of high-quality products 
                            that complement each other. Whether you're looking for a mix of snacks, 
                            essentials, or indulgent treats, our combo packs provide an excellent 
                            option to satisfy your needs at a discounted price.
                        </p>
                        <p className="text-gray-600 text-lg mt-4">
                            Choose a combo pack to experience a curated collection of products, 
                            carefully selected to deliver the best experience for you and your family.
                        </p>
                    </div>
                </div>

                {/* Gift Pack Section */}
                <div className="flex flex-col md:flex-row-reverse">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/images/products/gift-pack.avif"
                            alt="Gift Pack"
                            className="rounded-lg aspect-square shadow-lg w-full h-[400px]"
                        />
                    </div>
                    {/* Description Section */}
                    <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Gift Packs
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Looking for the perfect gift? Our Gift Packs are thoughtfully curated 
                            to make your loved ones feel special. Whether it’s a festive occasion, 
                            a birthday, or just a token of appreciation, these packs are designed to impress.
                        </p>
                        <p className="text-gray-600 text-lg mt-4">
                            Each gift pack is beautifully wrapped and contains premium products 
                            that are sure to delight. Show your love and care with our exclusive gift packs, 
                            perfect for any occasion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComboAndGiftPacks;
