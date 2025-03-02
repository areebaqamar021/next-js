"use client"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useGetProductDetail } from '@src/apis';
import { Button, Image, Spin, Typography } from 'antd';
import React, { useState } from 'react'

type ProductDetailScreenProps = {
    id: string;
}

function ProductDetailScreen(props: ProductDetailScreenProps) {
    const { id } = props
    const { data: product, isLoading } = useGetProductDetail({ id });
    const [count, setCount] = useState(0)
    const handleAdd = () => { setCount(count + 1) }
    const handleMinus = () => { setCount(count - 1) }
    return (
        <div className='px-4 py-12'>
            {
                isLoading ? (
                    <div className="flex justify-center p-10">
                        <Spin />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full bg-red-300">
                            <Image
                                src={product?.thumbnail}
                                alt={''}
                                wrapperClassName='w-full'
                                className="w-full h-96 object-contain"
                            />
                        </div>
                        <div className="h-20 w-full bg-red-600">
                            <Typography.Title level={4}>{product?.title}</Typography.Title>
                            <Typography.Title level={5}>${product?.price.toLocaleString()}</Typography.Title>
                            <Typography.Text>{product?.description}</Typography.Text>
                            <div className='border border-gray-500 w-20 rounded-md m-2'>
                                <Button shape="circle" key="add" type="text" icon={<PlusOutlined onClick={handleAdd}/>} />
                                <Typography.Text>{count}</Typography.Text>
                                <Button shape="circle" key="minus" type="text" icon={<MinusOutlined onClick={handleMinus}/>} />
                            </div>
                            <Button type="primary" block className="mt-2 w-24">
                                Add to Cart
                            </Button>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default ProductDetailScreen
