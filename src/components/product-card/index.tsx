"use client"
import { LikeOutlined, ShareAltOutlined, SwapOutlined } from '@ant-design/icons'
import { IProduct, useCreateCart, useGetCart, useGetUser } from '@src/apis'
import { Badge, Button, Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { MouseEventHandler } from 'react'

function ProductCard({ product }: { product: IProduct }) {
    const { push } = useRouter()
    const { data: user } = useGetUser();
    const { data: cart } = useGetCart({ user_id: user?.id })
    const { mutateAsync: createCart, isPending: createCartLoading } = useCreateCart()

    const addToCard: MouseEventHandler<HTMLElement> = async (e) => {
        e.preventDefault()
        if (user) {
            if (cart) {

            } else {
                await createCart({
                    userId: user.id,
                    products: [{ id: product.id, quantity: 1 }]
                })
            }
        } else {
            push("/login")
        }
    }

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
                    <Button loading={createCartLoading} onClick={addToCard} type="primary" block className="mt-2">
                        Add to Cart
                    </Button>
                </Card>
            </Link>
        </Badge.Ribbon>
    )
}

export default ProductCard
