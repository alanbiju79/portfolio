<script>
  const stack = [
    {
      "Workstation": [
        {
          name: "Macbook Air M1 (2020)",
          description: "The bedrock of the development process. The M1 still remains plenty for all my development needs, although I could have done with 16GB of RAM instead of 8GB!"
        },
        {
          name: "Asus VG249Q Monitor",
          description: "A 24 inch 1080p 144hz IPS monitor. It's always nice to have a larger second screen instead of always switching between multiple windows. Also used for the occasional gaming session!"
        },
        {
          name: "Epomaker SK68 Keyboard",
          description: "A 65% RGB hotswappable mechanical bluetooth keyboard. That's a lot of jargon..."
        },
        {
          name: "Logitech MX Anywhere 2 Mouse",
          description: "A bluetooth mouse that works on both Mac & Windows. Its small size makes it perfect for on-the-go use."
        },
        {
          name: "Nothing Ear (1)",
          description: "Can't be programming without a bit of music, especially when doing those unavoidable, boring tasks. These sound pretty good and the transparent design is super cool."
        },
        {
          name: "Hayworth Zody",
          description: "A very comfortable office chair with lots of adjustment. Perfect for those long programming sessions."
        },
      ]
    },
    {
      "Frameworks": [
        {
          name: "Ruby on Rails",
          description: "Ruby on Rails is the primary framework I use. I've been using it for 3 years now, and I love how quickly and easily I can get stuff built with it.",
          link: "https://rubyonrails.org/"
        },
        {
          name: "Stimulus & Turbo",
          description: "The perfect JS companions for Rails that make adding interactivity easy.",
          link: "https://hotwired.dev/"
        },
        {
          name: "Alpine.js",
          description: "A lightweight JS framework, perfect for those little bits of JavaScript.",
          link: "https://alpinejs.dev/"
        },
        {
          name: "SvelteKit",
          description: "The cleanest and easiest frontend JS framework I've tried. So good that I used it to build this site!",
          link: "https://kit.svelte.dev/"
        },
      ]
    },
    {
      "Dev Tools": [
        {
          name: "VS Code",
          description: "My go-to code editor. Super customisable through extensions which enables me to have any features and aesthetic I desire.",
          link: "https://code.visualstudio.com/"
        },
        {
          name: "Warp",
          description: "A modern, customisable terminal with AI built in.",
          link: "https://www.warp.dev/"
        },
        {
          name: "Postico 2",
          description: "A user-friendly application for MacOS which makes looking at Postgres databases easy and efficient.",
          link: "https://eggerapps.at/postico2/"
        },
        {
          name: "Github Desktop",
          description: "Best way to visually see the code changes I've made.",
          link: "https://desktop.github.com/"
        },
      ]
    },
    {
      "Other Tools": [
        {
          name: "Arc Browser",
          description: "A cool new browser that focuses on decluttering your browser experience. Helps me organise tabs into different spaces and stops me from having a million open tabs. Plus they add shiny new features every week.",
          link: "https://arc.net/"
        },
        {
          name: "Notion",
          description: "The place where I store all my notes and organise my life.",
          link: "https://www.notion.so/"
        },
        {
          name: "Chat GPT",
          description: "Used for general learing, debugging pesky code, writing copy and getting ideas on how to approach certain problems.",
          link: "https://chat.openai.com/"
        },
      ]
    }
  ]
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-16 md:border-l md:border-zinc-100 md:pl-6 max-w-3xl">
  {#each stack as category}
    <h2>{Object.keys(category)}</h2>
    <div class="md:col-span-3 space-y-8">
      {#each category[Object.keys(category)[0]] as item (item.name)}
        <div class="flex flex-col">
          {#if item.link}
            <a href={item.link} target="_blank" class="hover:text-accent-focus">
              <h3>{item.name}</h3>
            </a>
          {:else}
            <h3>{item.name}</h3>
          {/if}
          <div class="text-gray text-sm mt-1">{item.description}</div>
        </div>
      {/each}
    </div>
  {/each}
</div>