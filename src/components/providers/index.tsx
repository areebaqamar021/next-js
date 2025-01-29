"use client"
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryProvier } from '@src/lib'
import { ConfigProvider } from 'antd'
import React, { ReactNode } from 'react'

function Providers({ children }: { children: ReactNode }) {
    return (
        <AntdRegistry>
            <ConfigProvider
                theme={{ token: { colorPrimary: "#b88e2f" } }}
            >
                <QueryProvier>
                    {children}
                </QueryProvier>
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default Providers
