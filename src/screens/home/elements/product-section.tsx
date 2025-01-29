import { useState, useEffect } from "react";
import { Card, Button, message, Badge, Typography, Spin } from "antd";
import { ShareAltOutlined, LikeOutlined, SwapOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Image from "next/image";
import Link from "next/link";
import { api } from "@src/lib";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
}

export default function ProductSection() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true)
            const { data } = await api.get<Product[]>("/products", {
                params: { limit: 8 }
            })
            setProducts(data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            message.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="py-8 px-32">
            <div className="flex justify-between items-center mb-4">
                <div />
                <Typography.Title level={3}>Our Products</Typography.Title>
                <Link href="/products">
                    <Button icon={<ArrowRightOutlined />} iconPosition="end">
                        Show More
                    </Button>
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center p-10">
                    <Spin />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Badge.Ribbon
                            color="red"
                            key={product.id}
                            text="-30%"
                        >
                            <Card
                                classNames={{ body: "bg-gray-100 p-3" }}
                                cover={
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={200}
                                        height={200}
                                        className="w-full h-48 object-contain"
                                    />
                                }
                                actions={[
                                    <Button shape="circle" key="share" type="text" icon={<ShareAltOutlined />} />,
                                    <Button shape="circle" key="compare" type="text" icon={<SwapOutlined />} />,
                                    <Button shape="circle" key="like" type="text" icon={<LikeOutlined />} />
                                ]}
                            >
                                <h3 className="text-sm font-medium truncate">{product.title}</h3>
                                <p className="text-gray-500 text-xs truncate">{product.category}</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-sm font-bold">$ {product.price.toLocaleString()}</span>
                                    <span className="text-gray-400 line-through text-xs">$ {(product.price * 1.3).toLocaleString()}</span>
                                </div>
                                <Button type="primary" block className="mt-2">
                                    Add to Cart
                                </Button>
                            </Card>
                        </Badge.Ribbon>
                    ))}
                </div>
            )}
        </div>
    );
}