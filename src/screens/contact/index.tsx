"use client"
import React from 'react'
import Image from 'next/image';
import { Typography } from 'antd';

function ContactScreen() {
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
                    <Image src="/images/logo1.png" width={100} height={100} alt='' />
                    <Typography.Title level={1} className="text-2xl md:text-4xl font-semibold">Contact</Typography.Title>
                    <p className="font-medium">Home &gt; Contact</p>
                </div>

            </div>
        </div>
    )
}

export default ContactScreen
