import { Avatar, Button, Dropdown, Layout, Space } from 'antd';
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useGetUser } from '@src/apis';
import { Cart } from '@src/components';

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
        label: <Link href='/contact'>Contacts</Link>,
        key: 'contacts',
    },
];
function AppHeader({ onLogout }: { onLogout: () => Promise<void> }) {
    const { data: user } = useGetUser()

    return (
        <Header className='bg-white flex items-center h-20'>
            <Image src={"/images/logo.png"} alt='' width={150} height={150} />
            <Menu className='border-b-0 flex-1 flex justify-center items-center text-base font-semibold' mode="horizontal" items={items} />
            <Space size="large">
                {user ? (
                    <Dropdown menu={{ items: [{ key: "logout", label: "Logout", onClick: onLogout }] }}>
                        <Avatar src={user.image} />
                    </Dropdown>
                ) : (
                    <Link href="/login">
                        <Button
                            shape="circle"
                            type="text"
                            className="text-xl"
                        >
                            <Image
                                src="/images/icons/account-alert.png"
                                alt="account-alert"
                                width={20}
                                height={20}
                            />
                        </Button>
                    </Link>
                )}
                <Button
                    shape="circle"
                    type="text"
                    className="text-xl"
                >
                    <Image
                        src="/images/icons/search.png"
                        alt="search"
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
                        alt="heart"
                        width={20}
                        height={20}
                    />
                </Button>
                <Cart />
            </Space>
        </Header>
    )
}

export default AppHeader
