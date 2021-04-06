<script>

  import { clickOutside } from '$lib/clickOutside.js';
  import createPopperAction from '$lib/usePopper.js';

  const [usePopperElement, usePopperTooltip] = createPopperAction();
  let placement = 'top-start'
  
  function pop() {
    showMenu = !showMenu;
  }
  
  function handleClickOutside() {
    showMenu = !showMenu;
  }

  let showMenu = false;

</script>


<div use:usePopperElement on:click={pop}><slot name="one" /></div>

{#if showMenu}
<div
  use:usePopperTooltip={{ placement: placement, modifiers: [sameWidth, { name: 'offset', options: { offset: [0, 4],},},],}}
  use:clickOutside on:click_outside={handleClickOutside}
>
  <div class="c-popover">
    <slot name="two" />
  </div>
</div>
{/if}
