<script>
  export let title;
  export let date;
  export let content;
  export let slug;
  import RichContent from '$lib/RichContent.svelte';

</script>

<article>
  <header class="c-blog-article__header">
    <h2><a href="/site/blog/{slug}">{title}</a></h2>
    <p>{date} by <a href="/">Wolfr</a></p>
  </header>

  <RichContent>
    {@html content}
  </RichContent>

</article>

<style>
  

  
</style>