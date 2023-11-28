import { ReactNode } from 'react';

export type ChildrenProps = {
	children?: ReactNode;
};

export type Post = {
	title: string;
	description: string;
	date: Date;
	category: string;
	path: string;
	featured: boolean;
};

export type PostData = Post & {
	content: string;
	nextPost: Post | null;
	prevPost: Post | null;
};

export type BannerData = {
	message: string;
	state: 'success' | 'error';
};
