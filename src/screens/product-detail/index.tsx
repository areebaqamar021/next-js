"use client"
import { useGetProductDetail } from '@src/apis';
import { Image, Spin, Typography } from 'antd';
import React from 'react'

type ProductDetailScreenProps = {
    id: string;
}

function ProductDetailScreen(props: ProductDetailScreenProps) {
    const { id } = props
    const { data: product, isLoading } = useGetProductDetail({ id });

    return (
        <div className='px-4 py-16'>
            {
                isLoading ? (
                    <div className="flex justify-center p-10">
                        <Spin />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full">
                            <Image
                                src={product?.thumbnail}
                                alt={''}
                                wrapperClassName='w-full'
                                className="w-full h-96 object-contain"
                            />
                        </div>
                        <div className="justify-center">
                            <Typography.Title level={4}>{product?.title}</Typography.Title>
                            <Typography.Title level={5}>${product?.price.toLocaleString()}</Typography.Title>
                            <Typography.Text>{product?.description}</Typography.Text>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetailScreen
