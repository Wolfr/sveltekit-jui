<script>
  import { fade } from 'svelte/transition';
  
  let visible = false;
  setTimeout(() => visible =  true, 700) 
</script>

{#if visible}  
<div class="c-spinner" transition:fade></div>
{/if}
