import { Metadata } from 'next';

import AboutSection from '../../components/about/AboutSection';
import Hero from '../../components/common/Hero';

export const metadata: Metadata = {
	title: 'About Me',
	description: 'Chan9yu 커리어 소개'
};

export default function AboutPage() {
	return (
		<>
			<Hero />
			<AboutSection />
		</>
	);
}
