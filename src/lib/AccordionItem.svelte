<script>
  export let open;
  export let title;
  import Button from '$lib/Button.svelte';
  import PanelBody from '$lib/Icon.svelte';
  function toggle() {
    open = !open;
  }
</script>

<div class="c-accordion__item">
  <div class="c-accordion__item-header">
    {#if open}
      <Button layout="icon" skin="borderless" icon="chevron-down" on:click={toggle} />
    {:else }
      <Button layout="icon" skin="borderless" icon="chevron-right" on:click={toggle} />
    {/if}
    <h3 class="c-accordion__item-title">{title}</h3>
  </div>

  {#if open}
    <div class="c-accordion__content">
      <slot />
    </div>
  {/if}
</div>
