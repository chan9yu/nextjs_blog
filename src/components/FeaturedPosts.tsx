import { PostsGrid } from '../components';
import { getFeaturedPosts } from '../services';

const FeaturedPosts = async () => {
	const posts = await getFeaturedPosts();

	return (
		<section className="px-4 my-4">
			<h2 className="text-2xl font-bold my-2">Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
};

export default FeaturedPosts;
