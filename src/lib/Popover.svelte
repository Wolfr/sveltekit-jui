<script>
  
  import { clickOutside } from '$lib/clickOutside.js';
  import { popovers } from '$lib/popovers.js';

  function switchPopoverVisibility() {
    $popovers[0].popoverShow = !$popovers[0].popoverShow;
  }

  function handleClickOutside(event) {
    switchPopoverVisibility();
  }

</script>

{#if $popovers[0].popoverShow}
<div class="c-popover" use:clickOutside on:click_outside={handleClickOutside}>
  <slot />
</div>
{/if}
