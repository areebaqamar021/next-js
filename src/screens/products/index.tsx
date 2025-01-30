"use client";
import { useGetProducts } from '@src/apis';
import { ProductCard } from '@src/components';
import { Empty, Spin } from 'antd';
import Image from 'next/image';
import React from 'react';

function ProductsScreen() {
    const { data: products, isLoading } = useGetProducts({});

    return (
        <div>
            <div className="relative w-full h-[50vh]">
                <Image
                    src="/images/shop-bg.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Shop Banner"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-black text-2xl md:text-4xl font-semibold">Shop</h1>
                    <p className="text-black font-medium">Home &gt; Shop</p>
                </div>

            </div>

            <div className="p-5 mt-5">
                {isLoading ? (
                    <div className="flex justify-center p-10">
                        <Spin />
                    </div>
                ) : !products?.length ? (
                    <Empty description="No products" />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products?.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductsScreen;
