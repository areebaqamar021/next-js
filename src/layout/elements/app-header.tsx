import { Button, Layout, Space } from 'antd'
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout
const items: MenuItem[] = [
    {
        label: <Link href='/'>Home</Link>,
        key: 'home',
    },
    {
        label: <Link href='/products'>Shop</Link>,
        key: 'shop',
    },
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Contacts',
        key: 'contacts',
    },
];
function AppHeader() {

    return (
        <Header className='bg-white flex items-center h-20'>
            <Image src={"/images/logo.png"} alt='' width={150} height={150} />
            <Menu className='border-b-0 flex-1 flex justify-center items-center text-base font-semibold' mode="horizontal" items={items} />
            <Space size="large">
                <Button
                    shape="circle"
                    type="text"
                    className="text-xl"
                >
                    <Image
                        src="/images/icons/account-alert.png"
                        alt="Shopping Cart"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    shape="circle"
                    type="text"
                    className="text-xl"
                >
                    <Image
                        src="/images/icons/search.png"
                        alt="Shopping Cart"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    shape="circle"
                    type="text"
                    className="text-xl"
                >
                    <Image
                        src="/images/icons/heart.png"
                        alt="Shopping Cart"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    shape="circle"
                    type="text"
                    className="text-xl"
                >
                    <Image
                        src="/images/icons/shopping-cart.png"
                        alt="Shopping Cart"
                        width={20}
                        height={20}
                    />
                </Button>
            </Space>
        </Header>
    )
}

export default AppHeader
