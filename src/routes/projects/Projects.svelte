<script>
  import rsr from '$lib/images/screenshots/rsr.png';
  import dishy from '$lib/images/screenshots/dishy.jpeg';
  import zedball from '$lib/images/screenshots/zedball.png';
  import cookiechimp from '$lib/images/screenshots/cookiechimp.png';
  import rapidRails from '$lib/images/screenshots/rapid-rails.png';
  import execpal from '$lib/images/screenshots/execpal.png';

  const projects = [
    {
      name: "ReadySetRecover",
      description: "An online program empowering patients to prepare for and recover from&nbspsurgery.",
      url: "https://readysetrecover.com/",
      link_name: "readysetrecover.com",
      logo: "",
      image: rsr,
      status: "live"
    },
    {
      name: "Dishy",
      description: "A subscription meal delivery business based in Dublin&nbsp🇮🇪.",
      url: "https://getdishy.com/",
      link_name: "getdishy.com",
      logo: "",
      image: dishy,
      status: "live"
    },
    {
      name: "Zedball",
      description: "A multiplayer football management game integrating Sorare&nbspcards.",
      url: "https://zedball.com/",
      link_name: "zedball.com",
      logo: "",
      image: zedball,
      status: "live"
    },
    {
      name: "CookieChimp",
      description: "A customizable cookie consent widget & cookie management&nbspplatform.",
      url: "https://cookiechimp.com/",
      link_name: "cookiechimp.com",
      logo: "",
      image: cookiechimp,
      status: "live"
    },
    {
      name: "RapidRails",
      description: "An opinionated starter template for Ruby on Rails&nbspprojects.",
      url: "javascript:void(0);",
      link_name: "",
      logo: "",
      image: rapidRails,
      status: "in_progress"
    },
    {
      name: "EcecPal",
      description: "An AI powered accounting&nbsptool.",
      url: "javascript:void(0);",
      link_name: "",
      logo: "",
      image: execpal,
      status: "in_progress"
    },
  ];

  let cardHoverable = (status) => {return status === "in_progress" ? "cursor-default" : "hover:bg-base-200"};
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {#each projects as project (project.name)}
    <a href={project.url} target="_blank">
      <div class="card w-full h-full shadow-xl group {cardHoverable(project.status)}">
        <figure class="h-44"><img src={project.image} alt={project.name} loading="lazy" /></figure>
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
    </a>
  {/each}
</div>