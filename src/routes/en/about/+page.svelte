<script>
	import Layout from '$lib/components/Layout.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Layout title="About" img="../assets/mentor.png">
	<!-- Main Content -->
	<div class="container">
		<!-- <img src="../assets/mentor.png" alt="" srcset="" /> -->
		<!-- Section 1: Introduction -->
		<section>
			<h2>Who We Are</h2>
			<p>
				Educa US is a leading educational travel agency that specializes in creating unforgettable
				journeys for students, and lifelong learners. With a passion for education and a commitment
				to excellence, our team of experienced professionals curates immersive travel programs that
				combine learning, exploration, and adventure. We have the expertise and resources to make
				your dream trip a reality.
			</p>
		</section>

		<!-- Section 2: Our Vision -->
		<section>
			<h2>Our Vision</h2>
			<p>
				Our vision is to inspire and empower individuals through educational travel, fostering
				global citizens who are compassionate, knowledgeable, and culturally aware. We strive to
				create a world where everyone has access to transformative educational experiences that
				transcend borders and foster lifelong learning.
			</p>
		</section>

		<!-- Section 3: What Sets Us Apart -->
		<section>
			<h2>What Sets Us Apart</h2>
			<div class="features">
				<div class="feature">
					<h3>Tailored Experiences</h3>
					<p>
						We understand that each traveler has unique interests and learning goals. That's why we
						meticulously design our travel programs to cater to diverse preferences, ensuring an
						enriching experience for every participant.
					</p>
				</div>
				<div class="feature">
					<h3>Educational Expertise</h3>
					<p>
						As experts in both education and travel, we merge these fields to create learning
						opportunities that resonate with travelers of all ages. Our itineraries incorporate
						visits to iconic landmarks, educational institutions, cultural sites, and hands-on
						activities, bringing academic subjects to life.
					</p>
				</div>
				<div class="feature">
					<h3>Safety & Support</h3>
					<p>
						Your safety is our top priority. We partner with trusted local guides, secure
						accommodations, and maintain a 24/7 support system to ensure a worry-free journey for
						every traveler.
					</p>
				</div>
				<!-- <div class="feature">
					<h3>Global Network</h3>
					<p>
						With a vast network of educational institutions, partners, and local experts worldwide,
						we have the connections to offer an extensive range of destinations and programs.
					</p>
				</div> -->
			</div>
			<!-- ... (same as previous) ... -->
		</section>

		<!-- Section 4: Our Achievements -->
		<section>
			<h2>Our Achievements</h2>

			<!-- Subsection 1: Statistics -->
			<div class="stats">
				<div class="stat-item">
					<h3>700+</h3>
					<p>Students Studied Abroad</p>
				</div>
				<div class="stat-item">
					<h3>7+</h3>
					<p>Years of Experience</p>
				</div>
				<div class="stat-item">
					<h3>100+</h3>
					<p>Universities in Partnership</p>
				</div>
			</div>

			<!-- Subsection 2: Journey to Becoming Number 1 -->
			<h3>Journey to Becoming Number 1 in Assisting Students to Study in the USA</h3>

			<!-- Subsection 2.1: Humble Beginnings -->
			<h4>Humble Beginnings</h4>
			<p>
				Founded in 2010 by passionate educators and travel enthusiasts, Educa US started as a small
				initiative to provide students with meaningful educational travel experiences. Our focus was
				on creating personalized itineraries that combined academic enrichment with cultural
				exploration.
			</p>
			<p>
				With a dedicated team and a commitment to quality, we quickly gained recognition for our
				exceptional service and attention to detail. As more students embarked on life-changing
				journeys with us, our reputation began to grow, setting the foundation for our future
				success.
			</p>

			<!-- Subsection 2.2: Excellence in Educational Travel -->
			<h4>Excellence in Educational Travel</h4>
			<p>
				As the demand for educational travel increased, we realized the potential to assist students
				in pursuing their dreams of studying in the USA. We expanded our services to include
				specialized study abroad programs, working closely with prestigious American universities to
				offer students the best opportunities.
			</p>
			<p>
				Our team of education experts and travel consultants collaborated to design comprehensive
				study abroad programs that aligned with students' academic interests and career goals. We
				focused on providing unparalleled support to our students, guiding them through the
				application process, securing scholarships, and offering ongoing assistance during their
				time in the USA.
			</p>

			<!-- Subsection 2.3: Partnering with Leading Institutions -->
			<h4>Partnering with Leading Institutions</h4>
			<p>
				To ensure the highest quality of education and experiences, we established partnerships with
				over 100 esteemed American universities. These partnerships allowed us to offer diverse
				academic disciplines and access to world-class faculty, making us the go-to agency for
				students seeking exceptional study opportunities in the USA.
			</p>
			<p>
				Our collaborations also extended to various educational and cultural organizations, enabling
				us to enrich our programs with exclusive visits, workshops, and networking events. Through
				these partnerships, we continued to expand our reach and impact in the educational travel
				industry.
			</p>

			<!-- Subsection 2.4: Setting New Standards -->
			<h4>Setting New Standards</h4>
			<p>
				As our agency grew, we remained committed to continuous improvement. We listened to feedback
				from students, educators, and partners to enhance our offerings and exceed expectations.
				This dedication to excellence and innovation set new standards in educational travel,
				further establishing us as a leader in the industry.
			</p>
			<p>
				With a growing number of success stories and satisfied students, word of mouth became one of
				our most potent marketing tools. Students who studied abroad with us shared their
				life-changing experiences with friends and peers, spreading our reputation as the number one
				agency for studying in the USA.
			</p>

			<!-- Subsection 2.5: Becoming the Top Choice -->
			<h4>Becoming the Top Choice</h4>
			<p>
				Through years of hard work, unwavering dedication, and a passion for education, Educa US
				proudly earned the esteemed title of being the number one agency for assisting students in
				studying in the USA.
			</p>
			<p>
				Our commitment to student success, strong partnerships, and personalized approach continues
				to be the foundation of our agency. We take immense pride in the thousands of students who
				have successfully achieved their academic and personal goals through our programs.
			</p>
			<p>
				As we look to the future, we remain dedicated to our mission of providing transformative
				educational experiences that transcend borders and create global citizens equipped to thrive
				in a diverse world.
			</p>
		</section>
	</div>
</Layout>

<style>
	/* CSS Reset */

	.stats {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: var(--primary-color);
		color: white;
		padding: 20px;
		margin-block: 30px;
	}

	.stat-item {
		text-align: center;
	}

	.stat-item h3 {
		font-size: 24px;
		color: white;
	}

	.stat-item p {
		font-size: 16px;
		color: white;
	}
	body,
	h1,
	h2,
	p {
		margin: 0;
		padding: 0;
	}

	/* Header */

	/* Main Content */
	/* .container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	} */

	h2 {
		font-size: 24px;
		color: var(--primary-color);
		margin-bottom: 10px;
	}
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		font-size: 16px;
		margin-bottom: 20px;
	}

	/* Features Section */
	.features {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 30px;
	}

	.feature {
		flex: 0 0 calc(33.33% - 20px);
		background-color: #f2f2f2;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 5px;
	}

	/* Footer */
	footer {
		background-color: #007bff;
		padding: 10px;
		color: #fff;
		text-align: center;
	}

	/* Media Queries */
	@media (max-width: 768px) {
		.feature {
			flex: 0 0 calc(50% - 20px);
		}
	}

	@media (max-width: 480px) {
		.feature {
			flex: 0 0 100%;
		}
	}
</style>
