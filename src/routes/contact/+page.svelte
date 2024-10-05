<script>
	import Layout from '$lib/components/Layout.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Layout img="../assets/office_2.png" title="Contact Us">
	<section class="contact">
		<div class="container flex">
			<div class="contact__form">
				<h2>Contact Us</h2>
				<p>
					Have questions or need assistance? We'd love to hear from you! Use the form below to get
					in touch with our team. We will respond to your inquiry as soon as possible.
				</p>

				<form id="contact-form" action="?/send" method="post">
					<label for="name">Name:</label>
					<input type="text" id="name" name="name" required />

					<label for="email">Email:</label>
					<input type="email" id="email" name="email" required />

					<label for="phone">Phone:</label>
					<input type="text" id="phone" name="phone" required />

					<label for="message">Message:</label>
					<textarea id="message" name="message" rows="5" required />

					<input type="submit" value="Send" />
					<!-- <button type="submit">Send Message</button> -->
				</form>
			</div>
			<div class="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.774660659503!2d10.268023275420658!3d36.847872465011505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4b136413f7f7%3A0x2ed36b5c36e3d479!2sEducaus!5e0!3m2!1sen!2stn!4v1690903609633!5m2!1sen!2stn"
					width="100%"
					height="100%"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</section>
</Layout>

<style>
	.flex {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		& > * {
			flex: 1 1 400px;
		}
	}
	section.contact {
		margin: 0 auto;
		& .contact__wrapper {
			display: flex;
			flex-wrap: wrap;
			column-gap: 1rem;
			gap: 2rem;
			width: 100%;
		}
	}

	input[type='text'],
	input[type='email'] {
		width: 100%;
		box-sizing: border-box;
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
		padding: 12px;
		border-width: 1px;
		border-style: solid;
		border-color: rgb(204, 204, 204);
		border-image: initial;
		border-radius: 4px;
	}
	textarea {
		width: 100%;
		box-sizing: border-box;
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
		padding: 12px;
		border-width: 1px;
		border-style: solid;
		border-color: rgb(204, 204, 204);
		border-image: initial;
		border-radius: 4px;
	}

	input[type='submit'] {
		background-color: var(--primary-color);
		border: 1px solid var(--primary-color) !important;
		color: white;
		padding: 12px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		width: 100%;
	}
	textarea {
		height: 200px;
		width: 100%;
	}
</style>
