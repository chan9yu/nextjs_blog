import { ClassAttributes, HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SyntaxHighlighterCodeProps = Omit<
	ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps,
	'ref' | 'style'
>;

const SyntaxHighlighterCode = ({ node, className, children, ...props }: SyntaxHighlighterCodeProps) => {
	const match = /language-(\w+)/.exec(className || '');

	if (!match) {
		return <code {...props}>{children}</code>;
	}

	return (
		<SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={materialDark}>
			{String(children).replace(/\n$/, '')}
		</SyntaxHighlighter>
	);
};

export default SyntaxHighlighterCode;
