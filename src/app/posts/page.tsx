import { Metadata } from 'next';

import FilterablePosts from '../../components/post/FilterablePosts';
import { getAllPosts } from '../../services/posts';

export const metadata: Metadata = {
	title: 'All Posts',
	description: '개발 관련 블로그 글'
};

export default async function PostsPage() {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map(posts => posts.category))];

	return (
		<section>
			<FilterablePosts categories={categories} posts={posts} />
		</section>
	);
}
