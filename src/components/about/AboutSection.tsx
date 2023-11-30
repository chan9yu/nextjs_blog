const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutSection() {
	return (
		<section className="bg-gray-100 shadow-lg p-8 m-8 text-center rounded-lg">
			<h2 className={TITLE_CLASS}>Who Am I?</h2>
			<p>
				2년 차 프론트엔드 개발자 <br />
				변화하는 기술과 트렌드에 대한 이해와 적응력을 가지고 성장하고 있습니다 🙃
			</p>
			<h2 className={TITLE_CLASS}>Career</h2>
			<p>알서포트 (-Now)</p>
			<h2 className={TITLE_CLASS}>Skills</h2>
			<p>
				HTML, CSS, Javascript <br />
				SASS, Typescript, CSS-In-JS <br />
				React, Nextjs, Storybook <br />
				Jest, Cypress
			</p>
		</section>
	);
}
