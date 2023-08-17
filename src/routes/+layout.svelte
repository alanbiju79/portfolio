<script>
  import "../app.css";
  import Menu from "./Menu.svelte";
	import Footer from "./Footer.svelte";
</script>

<div class="w-full max-w-7xl bg-base-100 py-8 px-4 sm:px-24 border border-base-200 min-h-screen">
	<Menu />

	<main class="mt-16 sm:mt-20">
		<slot />
	</main>

	<!-- <Footer /> -->
		
</div>