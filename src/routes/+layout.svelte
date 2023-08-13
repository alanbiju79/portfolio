<script>
  import "../app.css";
  import Menu from "./Menu.svelte";
</script>

<div>
	<Menu />

	<main>
		<slot />
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	</footer>
</div>