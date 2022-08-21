<script>
  import { v4 as uuid } from '@lukeed/uuid';

  export let accordionOpen = false;
  export let title;
  export let controlId = uuid();
  export let labelId = uuid();
  
  export let activatedOnce = 0;

  import Button from '$lib/Button.svelte';

  function toggle() {
    activatedOnce = 1;
    accordionOpen = !accordionOpen;
  }
</script>


<style>

  :global(.rotated.c-icon) {
    transform: rotate(0deg);
    transition: transform ease-in-out .15s;
  }

  :global(.rotated.c-icon) {
    transform: rotate(90deg);
  }

</style>

{#if activatedOnce && accordionOpen}
  <div aria-live="assertive" aria-atomic="true" class="u-d-sr-accessible">Opened section</div>
{/if}
{#if activatedOnce && !accordionOpen}
  <div aria-live="assertive" aria-atomic="true" class="u-d-sr-accessible">Closed section</div>
{/if}

<div class="c-accordion__item" aria-expanded={accordionOpen}>
  <div class="c-accordion__item-header">
    <Button layout="icon" skin="borderless" icon="chevron-right" ariaControls={controlId} ariaExpanded={accordionOpen} iconAnimatedClass={ accordionOpen ? 'rotated' : ''} on:click={toggle}>
      {#if accordionOpen}Expand section{:else}Collapse section{/if}
    </Button>
    <h3 id={labelId} class="c-accordion__item-title">{title}</h3>
  </div>

  {#if accordionOpen}
    <div class="c-accordion__content" role="region" tabindex="0" id={controlId} aria-labelledby={labelId}>
      <slot />
    </div>
  {/if}
</div>
