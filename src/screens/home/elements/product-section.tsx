import { Button, Typography, Spin, Empty } from "antd";
import Link from "next/link";
import { useGetProducts } from "@src/apis";
import { ProductCard } from "@src/components";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function ProductSection() {
    const { data: products, isLoading } = useGetProducts({
        limit: 8
    });

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
    );
}