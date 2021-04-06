<script>
  import RichContent from '$lib/RichContent.svelte';
  import Button from '$lib/Button.svelte';
</script>

<slot />

<main>
  <div>
    <div class="c-brand">
      <img src="/leaf.svg" width="44" />
      <h1>Sveltekit-JUI (0.1)</h1>
    </div>
    <RichContent>
      <p>Sveltekit-JUI is a kit of UI components to be used in conjunction with <a href="https://svelte.dev/">Svelte</a> and <a href="https://kit.svelte.dev/docs">Svelte Kit</a>. The J stands for Jungle - the UI for user interface.</p>
      <p>Please use the page tree on the left to navigate to different page examples, or view the <a href="/styleguide">styleguide</a> to view the documented components.</p>

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
  
  .c-brand {
    display: flex;
    align-items: center;
  }

  .c-brand img {
    margin-right: .8rem;
  }

  .c-brand h1 {
    font-size: 2.8rem;
    font-weight: 600;
    color: #000;
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