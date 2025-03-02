import { ProductDetailScreen } from '@src/screens';
import React from 'react'

type ProductDetailPageProps = {
    params: Promise<{
        id: string;
    }>
}

async function ProductDetailPage(props: ProductDetailPageProps) {
    const params = await props.params
    return <ProductDetailScreen {...params} />
}

export default ProductDetailPage
