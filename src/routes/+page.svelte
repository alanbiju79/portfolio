<script>
  import pp from '$lib/images/alan.webp';
  import football from '$lib/images/home/football.webp';
  import tunnel from '$lib/images/home/tunnel.webp';
  import madeira from '$lib/images/home/madeira.webp';
  import bb from '$lib/images/home/big-ben.webp';
  import palms from '$lib/images/home/palms.webp';
  import Socials from './Socials.svelte'
</script>

<svelte:head>
  <title>Home - Alan Biju</title>
  <meta name="description" content="Alan Biju - Full-stack Ruby on Rails developer based in Dublin 🇮🇪. Passionate about creating exciting products that bring joy and satisfaction to users. Connect with me on GitHub and LinkedIn.">
</svelte:head>

<div class="flex flex-col max-w-2xl">
  <img src={pp} alt="alan" class="rounded-full h-20 w-20">
  <h1 class="mt-6">Building, Learning, Growing.</h1>

  <p class="mt-6 text-gray">
    Hey, I'm Alan, a full-stack Ruby on Rails developer based in Dublin 🇮🇪.
    I love the thrill of building new and exciting products that not only serve a purpose, but also brings joy and satisfaction to users.
    I am passionate about learning more and more about the tools I already use,
    while also exploring new technologies that allow me to be a more productive&nbspprogrammer.
  </p>

  <div class="flex flex-row gap-2 mt-6">
    <Socials />
  </div>
</div>

<div class="my-16 sm:my-20">
  <div class="-mx-4 sm:-mx-24 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
    <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <img src={madeira} alt="Ponta do Sol" loading="lazy" class="absolute inset-0 h-full w-full object-cover">
    </div>
    <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
      <img src={football} alt="Football stadium" loading="lazy" class="absolute inset-0 h-full w-full object-cover">
    </div>
    <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <img src={tunnel} alt="Beach" loading="lazy" class="absolute inset-0 h-full w-full object-cover">
    </div>
    <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <img src={bb} alt="Big Ben" loading="lazy" class="absolute inset-0 h-full w-full object-cover">
    </div>
    <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
      <img src={palms} alt="Palm trees" loading="lazy" class="absolute inset-0 h-full w-full object-cover">
    </div>
  </div>
</div>
