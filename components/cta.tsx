import Image from "next/image";

import backgroundImage from "@/assets/background-call-to-action.jpg";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export function CTA() {
	return (
		<section
			id="get-started-today"
			className="relative overflow-hidden bg-primary-600 py-32"
		>
			<Image
				className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 max-w-none"
				src={backgroundImage}
				alt=""
				width={2347}
				height={1244}
				unoptimized
			/>
			<Container className="relative">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="font-display text-3xl text-white tracking-tight sm:text-4xl">
						Get started today
					</h2>
					<p className="mt-4 text-lg text-white tracking-tight">
						It’s time to take control of your books. Buy our software so you can
						feel like you’re doing something productive.
					</p>
					<Button href="/register" color="white" className="mt-10">
						Get 6 months free
					</Button>
				</div>
			</Container>
		</section>
	);
}
