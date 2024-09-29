import nodemailer from 'nodemailer';
import { render } from 'svelte-email';

import Contact__SvelteComponent_ from '$lib/emails/Contact.svelte';
const transporter = nodemailer.createTransport({
	host: 'mail.educaus.net',
	port: 465,
	secure: true,
	auth: {
		user: 'contact@educaus.net',
		pass: 'Contact.Educaus'
	}
});
/** @type {import('./$types').Actions} */
export const actions = {
	send: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		const emailHtml = render({
			template: Contact__SvelteComponent_,
			props: {
				name: data.fullname,
				email: data.email,
				phone: data.phone,
				message: data.message
			}
		});
		const options = {
			from: 'contact@educaus.net',
			to: 'contact@arlington-high.com',
			subject: 'Contact Inquiry',
			html: emailHtml
		};

		const result = await transporter.sendMail(options);
		return {
			success: result.accepted
		};
	}
};
