import { MultiCarousel, PostCard } from '../components';
import { getNonFeaturedPosts } from '../services';

const Carousel = async () => {
	const posts = await getNonFeaturedPosts();

	return (
		<section className="px-4 my-4">
			<h2 className="text-2xl font-bold my-2">You May Like</h2>
			<MultiCarousel>
				{posts.map(post => (
					<PostCard key={post.path} post={post} />
				))}
			</MultiCarousel>
		</section>
	);
};

export default Carousel;
