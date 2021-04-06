<script>
  export let type = "select";

  import Icon from '$lib/Icon.svelte';

  import createPopperAction from '$lib/usePopper.js';
  import { clickOutside } from '$lib/clickOutside.js';
  import Button from '$lib/Button.svelte';

  // Trap focus
  import { trapFocus } from "$lib/trapFocus";
  
  export let sameWidth = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
      state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
      state.elements.popper.style.width = `${
        state.elements.reference.offsetWidth
      }px`;
    }
  };
  
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


{#if type == "select"}
  <div
    tabindex="0"
    class="c-custom-select"
    class:c-custom-select--focus={showMenu}
    on:focus={pop}
    on:click={pop}
    use:usePopperElement
  >
    Custom dropdown (navigation)
    {#if showMenu}
      <Icon icon="caret-up" />
    {:else}
      <Icon icon="caret-down" />
    {/if}
  </div>
{/if}

{#if type == "icon"}
  <Icon icon="options" />
  <div
    style="float: left;"
    tabindex="0"

    on:focus={pop}
    on:click={pop}
    use:usePopperElement
  >
    {#if showMenu}
      <Button layout="icon" variant="borderless" icon="options-horizontal" active>Show options</Button>
    {:else}
      <Button layout="icon" variant="borderless" icon="options-horizontal">Show options</Button>
    {/if}
  </div>
{/if}

{#if showMenu}
<div
  use:usePopperToolip={{ placement: placement, modifiers: [sameWidth, { name: 'offset', options: { offset: [0, 10],},},],}}
  use:clickOutside on:click_outside={handleClickOutside}
  use:trapFocus
>
  <ul class="c-nav-menu">
    <slot />
  </ul>
</div>
{/if}


