"use client";
import { useGetProducts, useGetAllCategories } from '@src/apis';
import { ProductCard } from '@src/components';
import { Empty, Spin, Typography, Select } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

function ProductsScreen() {
    const [category, setCategory] = useState("all")
    const { data, isLoading } = useGetProducts({
        category: category === "all" ? undefined : category
    });
    const { data: categories = [] } = useGetAllCategories();

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
                    <Typography.Title level={1} className="text-2xl md:text-4xl font-semibold">Shop</Typography.Title>
                    <p className="font-medium">Home &gt; Shop</p>
                </div>
            </div>
            <div className='flex justify-end my-3'>

            <Select
                className='w-48'
                value={category}
                onChange={setCategory}
                options={[
                    { label: "All", value: "all" },
                    ...categories.map(category => ({
                        label: <Typography.Text className='capitalize'>{category}</Typography.Text>,
                        value: category
                    }))
                ]}
            />
            </div>

            <div className="p-5">
                {isLoading ? (
                    <div className="flex justify-center p-10">
                        <Spin />
                    </div>
                ) : !data?.products.length ? (
                    <Empty description="No products" />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data?.products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductsScreen;
