import Image from 'next/image';
import Link from 'next/link';

const PROFILE_IMG_URL = 'https://avatars.githubusercontent.com/u/80776262?v=4' as const;

export default function Hero() {
	return (
		<section className="flex flex-col justify-center items-center gap-1">
			<Image
				className="rounded-full mx-auto"
				src={PROFILE_IMG_URL}
				alt="profile image"
				width={250}
				height={250}
				priority
			/>
			<h2 className="text-3xl font-bold mt-2">찬규</h2>
			<h3 className="text-xl font-semibold">chan9yu</h3>
			<span>FE 개발자 여찬규 입니다 🙃</span>
			<Link className="px-4 py-2 text-white bg-emerald-600 box-border rounded cursor-pointer mt-2" href="/contact">
				Contact Me
			</Link>
		</section>
	);
}
