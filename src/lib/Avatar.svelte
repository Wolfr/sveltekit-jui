<script>

  export let size = null;
  export let imgSrc = null;
  export let initials = 'JC';

</script>

{#if imgSrc}
  <div on:click on:mouseover on:mouseenter on:mouseleave on:focus class="c-avatar c-avatar--img { size ? 'c-avatar--'+size : ''}"><img src={imgSrc}></div>
{:else}
  <div on:click on:mouseover on:mouseenter on:mouseleave on:focus class="c-avatar { size ? 'c-avatar--'+size : ''}">{initials}</div>
{/if}