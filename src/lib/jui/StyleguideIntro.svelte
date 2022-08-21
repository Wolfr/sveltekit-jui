<script>
  import RichContent from '$lib/RichContent.svelte';

  export let title;
  export let content = null;
</script>
<h1 class="c-h1">{title}</h1>

{#if content}
  <RichContent>
    {@html content}
  </RichContent>
{/if}