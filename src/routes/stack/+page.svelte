<script>
  import Stack from "./Stack.svelte";
</script>

<svelte:head>
  <title>Stack - Alan Biju</title>
  <meta name="description" content="Discover the software I use, gadgets I love, and other recommendations that make software development easier and more productive. Explore my favorite stuff in this comprehensive list.">
</svelte:head>

<div class="">
  <div class="max-w-2xl">
    <h1>Software I use, gadgets I love, and other things I recommend.</h1>
  
    <p class="mt-6 text-gray">
      Without the right tools for the job, software development would be a pain,
      like trying to build a house without a hammer - possible, but incredibly difficult and time-consuming. 
      Fortunately, some great tools and exist to ease the process and stay productive.
      <br>
      Here's a big list of all of my favorite&nbspstuff.
    </p>
  </div>
  
  <div class="my-12 sm:my-16">
    <Stack />
  </div>
</div>