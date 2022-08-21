<script>
  export let tag;
</script>

{#if tag = "h1"}
  <h1 class="c-toolbar__title">
      <slot></slot>
  </h1>
{:else}
  <h2 class="c-toolbar__title">
      <slot></slot>
  </h2>
{/if}