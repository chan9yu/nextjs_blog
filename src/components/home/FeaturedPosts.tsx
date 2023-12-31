import type { Post } from '../../@types/custom/post';
import PostsGrid from '../common/PostsGrid';

type FeaturedPostsProps = {
	posts: Post[];
};

const FeaturedPosts = async ({ posts }: FeaturedPostsProps) => {
	return (
		<section className="px-4 my-4">
			<h2 className="text-2xl font-bold my-2">Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
};

export default FeaturedPosts;
