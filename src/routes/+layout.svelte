<script>
  import "../app.css";
  import Menu from "./Menu.svelte";
	import Footer from "./Footer.svelte";
</script>

<div class="max-w-7xl bg-base-100 p-4 md:px-12 border border-base-300">
	<Menu />

	<main class="mt-16 sm:mt-20">
		<slot />
	</main>

	<!-- <Footer /> -->
		
</div>