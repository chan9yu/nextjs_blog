'use client';

import { useState } from 'react';

import type { Post } from '../../@types';
import { Categories, PostsGrid } from '../../components';

type FilterablePostsProps = {
	categories: string[];
	posts: Post[];
};

const ALL_POSTS = 'All Posts';

const FilterablePosts = ({ posts, categories }: FilterablePostsProps) => {
	const [selected, setSelected] = useState(ALL_POSTS);
	const filtered = selected === ALL_POSTS ? posts : posts.filter(post => post.category === selected);

	return (
		<section className="flex m-4">
			<PostsGrid posts={filtered} />
			<Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={setSelected} />
		</section>
	);
};

export default FilterablePosts;
