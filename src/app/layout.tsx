import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import type { ChildrenProps } from '../@types/custom/common';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import './globals.css';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Chan9yu의 블로그',
		template: 'Chan9yu의 블로그 | %s'
	},
	description: '프론트엔드 개발자 Chan9yu의 블로그',
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon.ico'
		}
	]
};

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="ko" className={sans.className}>
			<body className="flex flex-col w-full">
				<Header />
				<main className="grow w-full max-w-screen-2xl mx-auto">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
