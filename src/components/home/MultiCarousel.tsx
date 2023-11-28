'use client';

import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import type { ChildrenProps } from '../../@types';

const responsive: ResponsiveType = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2
	}
};

const MultiCarousel = ({ children }: ChildrenProps) => {
	return (
		<Carousel itemClass="m-2" infinite autoPlay responsive={responsive}>
			{children}
		</Carousel>
	);
};

export default MultiCarousel;
