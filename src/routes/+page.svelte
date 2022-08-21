<script>
  import RichContent from '$lib/jui-components/RichContent.svelte';
  import Button from '$lib/jui-components/Button.svelte';
</script>

<slot />

<main>
  <div>
    <div class="c-brand">
      <h1>Sveltekit-JUI (0.6)</h1>
    </div>
    <RichContent>
      <p>Sveltekit-JUI is a kit of UI components to be used in conjunction with <a href="https://svelte.dev/">Svelte</a> and <a href="https://kit.svelte.dev/docs">SvelteKit</a>.</p>
      <p>Please use the page tree on the left to navigate to different page examples (activate with Ctrl+M), or view the <a href="/styleguide">styleguide</a> to view the documented components.</p>
      <div class="c-links-license">
        <Button href="https://github.com/Wolfr/sveltekit-jui">Code on Github</Button>
        <p>MIT licensed</p>
      </div>
    </RichContent>
  </div>
</main>

<style>

  main {
    height: 100%;
    width: 100%;
    display: grid;
  }

  main > div {
    margin: auto;
    max-width: 40rem;
  }

  .c-links-license {
    display: flex;
    align-items: center;
  }
  
  .c-links-license p {
    margin-left: 1.6rem;
    opacity: .66;
  }

</style>