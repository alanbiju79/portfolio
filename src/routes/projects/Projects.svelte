<script>
  import rsr from '$lib/images/screenshots/rsr.png';
  import dishy from '$lib/images/screenshots/dishy.jpeg';
  import zedball from '$lib/images/screenshots/zedball.png';
  import cookiechimp from '$lib/images/screenshots/cookiechimp.png';
  import rapidRails from '$lib/images/screenshots/rapid-rails.png';
  import execpal from '$lib/images/screenshots/execpal.png';
  import Project from './Project.svelte'

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
      url: "",
      link_name: "",
      logo: "",
      image: rapidRails,
      status: "in_progress"
    },
    {
      name: "EcecPal",
      description: "An AI powered accounting&nbsptool.",
      url: "",
      link_name: "",
      logo: "",
      image: execpal,
      status: "in_progress"
    },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {#each projects as project (project.name)}
    {#if project.url}
      <a href={project.url} target="_blank">
        <Project {project} />
      </a>
    {:else}
      <Project {project} />
    {/if}
  {/each}
</div>