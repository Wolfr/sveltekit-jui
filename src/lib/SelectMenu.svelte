<script>
  import Icon from '$lib/Icon.svelte';
  
  import createPopperAction from '$lib/usePopper.js';
  import { clickOutside } from '$lib/clickOutside.js';

  const [usePopperElement, usePopperToolip] = createPopperAction();

  let placement = 'bottom-start'

  let showMenu = false;

  function pop() {
    showMenu = !showMenu;
  }
  
  function handleClickOutside() {
    showMenu = !showMenu;
  }
</script>

<div tabindex="0" class="c-custom-select" class:c-custom-select--focus={showMenu} on:focus={pop} on:click={pop} on:blur={pop} use:usePopperElement>
  Custom dropdown (selection)
  {#if showMenu}
    <Icon icon="caret-up" />
  {:else}
    <Icon icon="caret-down" />
  {/if}
</div>

{#if showMenu}
<div
  use:usePopperToolip={{ placement: placement, modifiers: [{ name: 'offset', options: { offset: [0, 10],},},],}}
  use:clickOutside on:click_outside={handleClickOutside}
>
  <ul class="c-select-menu">
    <slot />
  </ul>
</div>
{/if}
