"use client";
import { useGetProducts } from '@src/apis';
import { ProductCard } from '@src/components';
import { Empty, Spin } from 'antd';
import React from 'react'

function ProductsScreen() {
    const { data: products, isLoading } = useGetProducts({});

    return (
        <div className='p-5'>
            {isLoading ? (
                <div className="flex justify-center p-10">
                    <Spin />
                </div>
            ) : !products?.length ? (
                <Empty
                    description="No products"
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductsScreen
