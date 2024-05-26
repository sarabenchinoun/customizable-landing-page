import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ctaAction } from "@/lib/config";
import { TopBackground } from "./background";

export function CTA() {
	return (
		<section id="cta" className="relative overflow-hidden bg-primary-600 py-32">
			<TopBackground light center />
			<Container className="relative">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="font-display text-3xl text-white tracking-tight sm:text-4xl">
						Get started today
					</h2>
					<p className="mt-4 text-lg text-white tracking-tight">
						It’s time to take control of your books. Buy our software so you can
						feel like you’re doing something productive.
					</p>
					<Button href={ctaAction.href} color="white" className="mt-10">
						{ctaAction.label}
					</Button>
				</div>
			</Container>
		</section>
	);
}
