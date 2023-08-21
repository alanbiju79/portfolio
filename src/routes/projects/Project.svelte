<script>
  export let project;
  let cardHoverable = (status) => {return status === "in_progress" ? "cursor-default" : "hover:bg-base-200"};
</script>

<div class="card w-full h-full shadow-xl group {cardHoverable(project.status)}">
  <figure><img src={project.image} alt={project.name} loading="lazy" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {project.name}
      {#if project.status == "in_progress"}
        <div class="badge badge-sm py-3 badge-accent">Coming Soon!</div>
      {/if}
    </h2>
    <p class="text-gray text-sm">{@html project.description}</p>
    {#if project.link_name}
      <div class="card-actions text-gray group-hover:text-accent-focus">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 my-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
        </svg>
        <p class="text-sm">{project.link_name}</p>
      </div>
    {/if}
  </div>
</div>