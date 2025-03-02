"use client"
import { useGetCart, useGetUser } from '@src/apis';
import { Badge, Button, Drawer } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const { data: user } = useGetUser()
    const { data: cart } = useGetCart({ user_id: user?.id })
    console.log("🚀 ~ Cart ~ cart:", cart)
    return (
        <>
            <Badge count={5}>
                <Button
                    shape="circle"
                    type="text"
                    className="text-xl"
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src="/images/icons/shopping-cart.png"
                        alt="shopping-cart"
                        width={20}
                        height={20}
                    />
                </Button>
            </Badge>

            <Drawer title="Basic Drawer" onClose={() => setOpen(false)} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default Cart;
