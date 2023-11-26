import { PostCard } from '../components';
import { Post } from '../services';

type PostsGridProps = {
	posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps) => {
	return (
		<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{posts.map(post => (
				<li key={post.path}>
					<PostCard post={post} />
				</li>
			))}
		</ul>
	);
};

export default PostsGrid;
