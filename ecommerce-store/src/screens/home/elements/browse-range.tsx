"use client";
import Image from "next/image";

const categories = [
    { name: "Dining", image: "/images/dining.png" },
    { name: "Living", image: "/images/living.png" },
    { name: "Bedroom", image: "/images/bedroom.png" },
];

export default function BrowseRange() {
    return (
        <div className="text-center py-12">
            <h2 className="text-2xl font-bold">Browse The Range</h2>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex justify-center gap-6 mt-6">
                {categories.map((category, index) => (
                    <div key={index} className="w-60">
                        <Image
                            src={category.image}
                            alt={category.name}
                            width={240}
                            height={300}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                        <p className="text-lg font-semibold mt-3">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
