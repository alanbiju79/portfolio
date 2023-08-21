<script>
  import "../app.css";
  import Menu from "./Menu.svelte";
	import Footer from "./Footer.svelte";

	import { fade } from 'svelte/transition'
	export let data
</script>

{#key data.url}
	<div class="w-full max-w-7xl bg-base-100 py-8 px-4 sm:px-24 xl:border xl:border-base-200 min-h-screen">
		<Menu />

		<main class="mt-16 sm:mt-20"
			in:fade={{duration: 200, delay: 200}}
			out:fade={{duration: 200}}
		>
			<slot />
		</main>

		<Footer />	
	</div>
{/key}