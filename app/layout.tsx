import { Oswald, Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontHeading = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
});

const fontBody = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
    weight: '400',
});

import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
        <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
        {children}
        </body>
        </html>
    );
}
