'use client';

import { useState } from 'react';

import type { Post } from '../../@types/custom/post';
import PostsGrid from '../common/PostsGrid';
import Categories from './Categories';

type FilterablePostsProps = {
	categories: string[];
	posts: Post[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: FilterablePostsProps) {
	const [selected, setSelected] = useState(ALL_POSTS);
	const filtered = selected === ALL_POSTS ? posts : posts.filter(post => post.category === selected);

	return (
		<section className="flex m-4">
			<PostsGrid posts={filtered} />
			<Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={setSelected} />
		</section>
	);
}
