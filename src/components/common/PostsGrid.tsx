import type { Post } from '../../@types/custom/post';
import PostCard from './PostCard';

type PostsGridProps = {
	posts: Post[];
};

export default function PostsGrid({ posts }: PostsGridProps) {
	return (
		<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow">
			{posts.map(post => (
				<li key={post.path}>
					<PostCard post={post} />
				</li>
			))}
		</ul>
	);
}
