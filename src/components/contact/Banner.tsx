import type { BannerData } from '../../@types';

type BannerProps = {
	banner: BannerData;
};

const Banner = ({ banner: { message, state } }: BannerProps) => {
	const isSuccess = state === 'success';
	const emoji = isSuccess ? '✅' : '🔥';

	return (
		<p className={`p-2 rounded-xl w-full text-center ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`}>
			{`${emoji} ${message}`}
		</p>
	);
};

export default Banner;
