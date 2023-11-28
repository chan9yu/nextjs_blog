import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { SyntaxHighlighterCode } from '../../components';

type MarkdownViewerProps = {
	content: string;
};

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
	return (
		<ReactMarkdown
			className="prose lg:prose-xl max-w-none"
			remarkPlugins={[remarkGfm]}
			components={{
				code: SyntaxHighlighterCode,
				img: image => (
					<Image
						className="w-full max-h-60 object-cover"
						src={image.src || ''}
						alt={image.alt || ''}
						width={500}
						height={350}
					/>
				)
			}}
		>
			{content}
		</ReactMarkdown>
	);
};

export default MarkdownViewer;
