export type Post = {
	title: string;
	description: string;
	date: Date;
	category: string;
	path: string;
	featured: boolean;
};

export type PostData = Post & {
	content: string;
	nextPost: Post | null;
	prevPost: Post | null;
};
