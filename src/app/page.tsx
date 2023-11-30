import Hero from '../components/common/Hero';
import Carousel from '../components/home/Carousel';
import FeaturedPosts from '../components/home/FeaturedPosts';
import { getNonFeaturedPosts } from '../services/posts';

export default async function HomePage() {
	const posts = await getNonFeaturedPosts();

	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
			<Carousel posts={posts} />
		</>
	);
}
