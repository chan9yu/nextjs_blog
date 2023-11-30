import { Metadata } from 'next';
import Image from 'next/image';

import AdjacentPostCard from '../../../components/post/AdjacentPostCard';
import PostContent from '../../../components/post/PostContent';
import { getFeaturedPosts, getPostData } from '../../../services/posts';

type PostPageProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params: { slug } }: PostPageProps): Promise<Metadata> {
	const { title, description } = await getPostData(slug);

	return {
		title,
		description
	};
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
	const postData = await getPostData(slug);
	const { nextPost, path, prevPost, title } = postData;

	return (
		<article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
			<Image
				className="w-full h-1/5 max-h-[500px]"
				src={`/images/posts/${path}.png`}
				alt={title}
				width={760}
				height={420}
			/>
			<PostContent postData={postData} />
			<section className="flex shadow-md">
				{prevPost && <AdjacentPostCard post={prevPost} type="prev" />}
				{nextPost && <AdjacentPostCard post={nextPost} type="next" />}
			</section>
		</article>
	);
}

export async function generateStaticParams() {
	const posts = await getFeaturedPosts();

	return posts.map(post => ({
		slug: post.path
	}));
}
