import { promises } from 'fs';
import { join } from 'path';

import type { Post, PostData } from '../@types';

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

export const getPostData = async (fileName: string): Promise<PostData> => {
	const posts = await getAllPosts();
	const post = posts.find(post => post.path === fileName);

	if (!post) {
		throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);
	}

	const index = posts.indexOf(post);
	const nextPost = index > 0 ? posts[index - 1] : null;
	const prevPost = index < posts.length ? posts[index + 1] : null;

	const filePath = join(process.cwd(), 'data', 'posts', `${fileName}.md`);
	const content = await promises.readFile(filePath, 'utf-8');

	return {
		...post,
		content,
		nextPost,
		prevPost
	};
};
