<script>
  import { page } from '$app/stores';
  $:selected = (path) => $page.url.pathname === path ? 'active' : '';
</script>

<div class="flex justify-center">
  <ul class="menu menu-horizontal bg-base-200 rounded-box gap-1">
    <li><a href="/" class={selected('/')}>Home</a></li>
    <li><a href="/projects" class={selected('/projects')}>Projects</a></li>
    <li><a href="/stack" class={selected('/stack')}>Stack</a></li>
  </ul>
</div>