import { Carousel, FeaturedPosts, Hero } from '../components';
import { getNonFeaturedPosts } from '../services';

const HomePage = async () => {
	const posts = await getNonFeaturedPosts();

	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
			<Carousel posts={posts} />
		</>
	);
};

export default HomePage;
