<template>
	<AppLayout>
		<h title="About us"></h>
		<section class="position-relative carousel-dark py-5">
			<div ref="glider">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 text-center py-3 py-xl-5">
							<h1 class="fw-medium mb-5">OUR WORLD</h1>
							<p class="fs-5 mb-5">AFYLA is a new voice in luxury fashion. Tracing a path from concept to creation, AFYLA designs, manufactures and distributes ready-to-wear collections while focusing on impeccable details and precise tailoring.</p>
							<p class="fs-5">AFYLA found its identity on significant values such as innovation, empowerment and sustainability development. We believe in a contemporary society where inclusiveness, modernism and ecoresponsibility reigns.</p>
						</div>
						<div class="col-lg-6">
							<img src="/img/home/page.jpg" class="d-block w-100" />
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 text-center py-3 py-xl-5">
							<p class="fs-5 mb-5">In its collections, AFYLA uses the strength of fashion as a personal form of self expression and combines a timeless perspective with renovated shapes and forms inspired by art, emotional intelligence and philosophy.</p>
							<p class="fs-5">Our vision goes beyond boundaries always seeking newness and a perspective of strong femininity. We seek to call out in every women a modern sensual empowered warrior.</p>
						</div>
						<div class="col-lg-6">
							<img src="/img/home/page.jpg" class="d-block w-100" />
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 text-center py-3 py-xl-5">
							<p class="fs-5 mb-5">Our technology based platforms were built on modern business principles of inclusive culture, transparency and organic scarcity. Every decision has been guided by a value system based on sustainability and uncompromising quality.</p>
							<p class="fs-5">Using fashion as a pathway to women empowerment and activism, AFYLA world is synonymous with innovation, diversity, authenticity, kindness, love and empowerment.</p>
						</div>
						<div class="col-lg-6">
							<img src="/img/home/page.jpg" class="d-block w-100" />
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 py-3 py-xl-5">
							<h1 class="fw-medium text-center mb-5">OUR VALUES</h1>
							<h5 class="fw-medium">1. INNOVATION</h5>
							<p class="mb-5">AFYLA is always driven by curiosity, intellectuality and diverse cultural universes. Inspired from art, emotional intelligence and philosophy, AFYLA carries obsession for newness and passion for discovery</p>
							<h5 class="fw-medium">2. RETHINKING TAILORING</h5>
							<p class="mb-5">AFYLA is synonymous with innovation and modernism. We always try to find transformation and combine a timeless perspective with renovated shapes and forms. Looking always to go beyond boundaries and challenge the tradition.</p>
							<h5 class="fw-medium">3. EMPOWERING</h5>
							<p>AFYLA believes that fashion is a unique personal form of self expression. We always seek to deliver empowering energy through bold shapes and daring designs. Our ultimate goal is to give women optimism for a better authentic self and a better future. We want to give women the energy to express their essence without any fear</p>
						</div>
						<div class="col-lg-6">
							<img src="/img/home/page.jpg" class="d-block w-100" />
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 py-3 py-xl-5">
							<h5 class="fw-medium">4. SUSTAINABILITY</h5>
							<p class="mb-5">AFYLA world was created to suit a contemporary society where inclusiveness, modernism and eco-responsibility reigns. We hate injustice and discrimination and every decision inside of the brand has been and will be guided by a sustainable mentality, going against any kind of unfairness towards the environment, people and animals.</p>
							<h5 class="fw-medium">5. EXQUISITE CRAFTMANSHIP</h5>
							<p class="mb-5">Tracing a path from concept to creation, AFYLA designs and manufactures ready-to-wear collections while focusing on impeccable details and precise tailoring. Our team of experts and young talents own an artisanal spirit that seeks uncompromising quality and growth.</p>
							<h5 class="fw-medium">6. SMART TECHNOLOGY</h5>
							<p>Our platforms goes hand in hand with technology and were built cleverly to suit you better. We want to give you a rich personalized experience that is updated with the evolution of business.</p>
						</div>
						<div class="col-lg-6">
							<img src="/img/home/page.jpg" class="d-block w-100" />
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 py-3 py-xl-5">
							<h5 class="fw-medium">7. LOVE & KINDNESS</h5>
							<p class="mb-5">From design to sustainable decisions, everything included with the process of building this brand has to do with LOVE and KINDNESS. Our love to fashion, to nature, to animals and to people give us the willingness to keep going and the strength to rise in the face of challenges.</p>
							<h5 class="fw-medium">8. CONVERSATION</h5>
							<p>One of AFYLA’s essential values is conversation. We are always open to communicate with people, and explore their perception. We inquisitively observes our community’s interactions and how they want things to be. We are sharp listeners and curious about everything coming from You.</p>
						</div>
						<div class="col-lg-6">
							<img src="/img/home/page.jpg" class="d-block w-100" />
						</div>
					</div>
				</div>
			</div>
			<button type="button" class="arrows carousel-control-prev prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button type="button" class="arrows carousel-control-next next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	import Glider from 'glider-js'
	export default {
		components: {
			AppLayout,
			h: Head,
		},
		mounted() {
			new Glider(this.$refs.glider, {
				slidesToScroll: 1,
				slidesToShow: 1,
				rewind: true,
				duration: 0,
				arrows: {
					prev: '.prev',
					next: '.next'
				}
			})
		}
	}
</script>

<style scoped>
	@media (max-width: 991px) {
		.arrows {
			top: 20%;
		}
	}
</style>
