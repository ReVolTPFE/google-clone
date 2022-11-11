export default function Footer() {
	let currentYear = new Date().getFullYear();

	return (
		<footer className="flex justify-center text-center py-6">
			<p>Copyright - Arnaud Steiner - {currentYear}</p>
		</footer>
	);
}
