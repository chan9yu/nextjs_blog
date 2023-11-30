import FilterablePosts from '../../components/post/FilterablePosts';
import { getAllPosts } from '../../services';

export default async function PostsPage() {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map(posts => posts.category))];

	return (
		<section>
			<FilterablePosts categories={categories} posts={posts} />
		</section>
	);
}
