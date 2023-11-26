import { promises } from 'fs';
import { join } from 'path';

export type Post = {
	title: string;
	description: string;
	date: Date;
	category: string;
	path: string;
	featured: boolean;
};

export const getAllPosts = async (): Promise<Post[]> => {
	const filePath = join(process.cwd(), 'data', 'posts.json');
	const data = await promises.readFile(filePath, 'utf-8');
	const sortedData = (JSON.parse(data) as Post[]).sort((a, b) => (a.date > b.date ? -1 : 1));

	return sortedData;
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
	const allPosts = await getAllPosts();
	const featuredPosts = allPosts.filter(post => post.featured);

	return featuredPosts;
};

export const getNonFeaturedPosts = async (): Promise<Post[]> => {
	const allPosts = await getAllPosts();
	const featuredPosts = allPosts.filter(post => !post.featured);

	return featuredPosts;
};
