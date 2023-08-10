<script>
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'World';
	export let email = 'ex@ex.com';
	export let phone = '000000';
	export let message = 'ex@ex.com';
</script>

<Html lang="en">
	<Text>
		Name : {name} ,
	</Text>
	<Text>
		Email : {email}
	</Text>
	<Text>
		Subject: {message}
	</Text>
	<Text>
		Phone: {phone}
	</Text>
	<Hr />
	<Button href="https://educaus.net/">Visit Educa US</Button>
</Html>
