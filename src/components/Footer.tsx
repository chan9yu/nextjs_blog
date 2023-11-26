const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-white h-16 flex justify-center items-center">
			&copy;{currentYear} chan9yu. All Right Reserved.
		</footer>
	);
};

export default Footer;
