import Link from "next/link";

export default function Home() {
	return (
	<main
		className={`bg-orange-300 text-white flex min-h-screen flex-col items-center justify-center p-12 text-8xl`}>
		ShapeBook
		<Link href="/step1">
			{"-->"}
		</Link>
	</main>
	);
}
