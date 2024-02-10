import Link from "next/link";

export default function Home() {
	return (
	<main
		className={`flex min-h-screen flex-col items-center justify-center p-12 text-8xl`}>
		Bella
		<Link href="/step1">
			{"-->"}
		</Link>
	</main>
	);
}
