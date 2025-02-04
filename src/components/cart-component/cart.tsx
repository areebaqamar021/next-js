import React from 'react';
import { Drawer, Button, Image } from 'antd';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const cartItems = [
        {
            id: 1,
            name: 'Asgaard sofa',
            price: 250000,
            quantity: 1,
            image: '/images/living.png',
        },
    ];

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Drawer
            title={<span className="font-bold text-lg">Shopping Cart</span>}
            placement="right"
            onClose={onClose}
            open={isOpen}
            width={400}
            style={{ padding: '16px' }}
        >
            <div className="flex flex-col gap-6">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 border-b pb-4 last:border-none"
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                        />
                        <div className="flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-500 text-sm">
                                {item.quantity} x Rs. {item.price.toLocaleString()}
                            </p>
                        </div>
                        <Button
                            type="text"
                            shape="circle"
                            className="text-gray-400 hover:text-red-500"
                            onClick={() => console.log(`Remove item ${item.id}`)}
                        >
                            ✕
                        </Button>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <div className="flex justify-between text-base font-semibold">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
            </div>
            <div className="mt-6 flex gap-4">
                <Button type="default" block className="border-black hover:border-black">
                    Cart
                </Button>
                <Button type="primary" block className="bg-black text-white">
                    Checkout
                </Button>
            </div>
        </Drawer>
    );
};

export default Cart;
