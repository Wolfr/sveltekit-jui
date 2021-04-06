<script>
  export let title;
  export let date;
  export let content;
  export let slug;
  import RichContent from '$lib/RichContent.svelte';
</script>

<article>
  <header>
    <h2><a href="/site/blog/{slug}">{title}</a></h2>
    <p>{date} by <a href="/">Wolfr</a></p>
  </header>

  <RichContent>
    {@html content}
  </RichContent>

</article>

<style>
  
  header h2 {
    font-size: 2.4rem;
    font-weight: 600;
    color: #000;
  }
  
  header {
    margin: 0 0 2rem;
  }
  
</style>