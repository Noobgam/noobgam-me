'use client';

import '@/index.css';
import {Provider} from '@/components/ui/provider';
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
