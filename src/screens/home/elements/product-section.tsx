"use client";
import { useState, useEffect } from "react";
import { Card, Button } from "antd";
import Image from "next/image";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
}

export default function ProductSection() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data.slice(0, 8)));
    }, []);

    return (
        <div className="py-8 px-32">
            <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        className="relative group"
                        bodyStyle={{ padding: 0 }}
                    >
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={200}
                                height={200}
                                className="w-full h-48 object-contain"
                            />
                            <div className="absolute top-2 right-2 bg-red-400 text-white rounded-full px-2 py-0.5 text-xs">
                                -30%
                            </div>
                            {/* Hover Actions */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                <div>
                                    <Button type="primary" className="bg-white text-[#b88e2f] font-semibold mt-10 px-10 py-3">
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className="flex gap-3">
                                    <button className="text-xs text-white">Share</button>
                                    <button className="text-xs text-white">Compare</button>
                                    <button className="text-xs text-white">Like</button>
                                </div>
                            </div>

                        </div>
                        <div className="p-2 bg-gray-100">
                            <h3 className="text-sm font-medium truncate">{product.title}</h3>
                            <p className="text-gray-500 text-xs truncate">{product.category}</p>
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-sm font-bold">$ {product.price.toLocaleString()}</span>
                                <span className="text-gray-400 line-through text-xs">$ {(product.price * 1.3).toLocaleString()}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}