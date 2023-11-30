import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import ContactForm from '../../components/contact/ContactForm';

export const metadata: Metadata = {
	title: 'Contact Me',
	description: 'Chan9yu에게 메일 보내기'
};

const LINKS = [
	{ icon: <AiFillGithub />, url: 'https://github.com/chan9yu' },
	{ icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/chan9yu/' }
];

export default function ContactPage() {
	return (
		<section className="flex flex-col items-center">
			<h2 className="text-3xl font-bold my-2">Contact Me</h2>
			<p>wry5533@gmail.com</p>
			<ul className="flex gap-4 my-2">
				{LINKS.map((link, index) => (
					<a
						className="text-5xl transition-all hover:text-blue-600"
						key={index}
						href={link.url}
						target="_blank"
						rel="noreferrer"
					>
						{link.icon}
					</a>
				))}
			</ul>
			<h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
			<ContactForm />
		</section>
	);
}
