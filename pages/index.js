import Link from "next/link";

export default function Home() {
	return (
	<main
		className={`bg-orange-300 w-screen h-screen text-white flex flex-col items-center justify-center text-3xl md:text-6xl`}>
		ShapeBook
		<Link href="/step1">
			{"-->"}
		</Link>
	</main>
	);
}
