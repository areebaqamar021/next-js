"use client"
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from './elements/app-header';
// import AppFooter from './elements/app-footer';

const { Content } = Layout;

const AppLayout = ({ children, onLogout }: { children: ReactNode, onLogout: () => Promise<void> }) => {
    return (
        <Layout className='h-full'>
            <AppHeader onLogout={onLogout} />
            <Layout className='overflow-y-auto'>
                <Content >{children}</Content>
                {/* <AppFooter /> */}
            </Layout>
        </Layout>
    )
};

export default AppLayout;