/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		article: params.article
	};
}
