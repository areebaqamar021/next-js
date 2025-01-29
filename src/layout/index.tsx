"use client"
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from './elements/app-header';
import AppFooter from '../screens/home/elements/app-footer';

const { Content } = Layout;

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Layout className='h-full'>
            <AppHeader />
            <Content>{children}</Content>
            <AppFooter />
        </Layout>
    )
};

export default AppLayout;