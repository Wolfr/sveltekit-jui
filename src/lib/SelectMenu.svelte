<script>

  export let cssClass = null;
  export let options = [{name: "Option 1"}];

  import Icon from '$lib/Icon.svelte';

  // Trap focus
  import { trapFocus } from "$lib/trapFocus";

  // Popperaction, thanks Tan li hau!
  // https://www.youtube.com/watch?v=CFj4X0bGOvE&ab_channel=lihautan

  import createPopperAction from '$lib/usePopper.js';
  const [usePopperElement, usePopperToolip] = createPopperAction();
  let placement = 'bottom-start'

  import SelectMenuItem from '$lib/SelectMenuItem.svelte';
  // Selected state handling with children (using event dispatching)
  let activeIndex = 0;
  let activeIndexStr = '';
  $: activeIndexStr = activeIndex.toString();
  
  function handleSelectedState(event) {
     activeIndex = event.detail.text;
  }

  let showMenu = false;

  // Simple click
  function pop() {
    showMenu = !showMenu;
  }
  
  // Click outside
  import { clickOutside } from '$lib/clickOutside.js';
  function handleClickOutside() {
    showMenu = !showMenu;
  }

  // Keyboard shortcut
  let trigger = 'Escape';
  function handleKeydown(e) {
    if (e.key == trigger) {
      showMenu = false;
    }
  }

  // Samewidth, pass false if not needed
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

</script>

<svelte:window on:keydown={handleKeydown}/>

<div
  tabindex="0"
  class="c-custom-select { cssClass} "
  class:c-custom-select--focus={showMenu}
  on:focus={pop}
  on:click={pop}
  use:usePopperElement
>
  {options[activeIndex].name}
  {#if showMenu}
    <Icon icon="caret-up" />
  {:else}
    <Icon icon="caret-down" />
  {/if}
</div>

{#if showMenu}
<div
  use:usePopperToolip={{ placement: placement, modifiers: [sameWidth, { name: 'offset', options: { offset: [0, 4],},},],}}
  use:clickOutside on:click_outside={handleClickOutside} style="z-index: 1;"
>
  <ul
      class="c-select-menu"
      use:trapFocus
      role="listbox"
      tabindex="0"
    >
    {#each options as option, index}
      <SelectMenuItem
        on:sendValue={handleSelectedState}
        index={index}
        selected={index==activeIndexStr}
      >
          {option.name}
      </SelectMenuItem>
    {/each}
  </ul>
</div>
{/if}
