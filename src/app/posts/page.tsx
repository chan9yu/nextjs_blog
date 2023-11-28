import { FilterablePosts } from '../../components';
import { getAllPosts } from '../../services';

const PostsPage = async () => {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map(posts => posts.category))];

	return (
		<section>
			<FilterablePosts categories={categories} posts={posts} />
		</section>
	);
};

export default PostsPage;
