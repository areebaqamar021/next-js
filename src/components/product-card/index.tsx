import { LikeOutlined, ShareAltOutlined, SwapOutlined } from '@ant-design/icons'
import { IProduct } from '@src/apis'
import { Badge, Button, Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard({ product }: { product: IProduct }) {
    return (
        <Badge.Ribbon
            color="red"
            text="-30%"
        >
            <Link href={`/products/${product.id}`}>
            <Card
                classNames={{ body: "p-3" }}
                cover={
                    <Image
                        src={product.thumbnail}
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
            </Link>
        </Badge.Ribbon>
    )
}

export default ProductCard
