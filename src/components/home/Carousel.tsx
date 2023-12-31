import type { Post } from '../../@types/custom/post';
import PostCard from '../common/PostCard';
import MultiCarousel from './MultiCarousel';

type CarouselProps = {
	posts: Post[];
};

const Carousel = async ({ posts }: CarouselProps) => {
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
