export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-white py-4 flex justify-center items-center">
			&copy;{currentYear} chan9yu. All Right Reserved.
		</footer>
	);
}
