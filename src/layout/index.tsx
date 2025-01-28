"use client"
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from './elements/app-header';

const { Footer, Content } = Layout;

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Layout className='h-full'>
            <AppHeader />
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    )
};

export default AppLayout;