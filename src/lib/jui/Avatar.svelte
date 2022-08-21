<script>

  export let size = null;
  export let imgSrc = null;
  export let initials = 'JC';

</script>

{#if imgSrc}
  <div class="c-avatar c-avatar--img { size ? 'c-avatar--'+size : ''}"><img src={imgSrc}></div>
{:else}
  <div class="c-avatar { size ? 'c-avatar--'+size : ''}">{initials}</div>
{/if}