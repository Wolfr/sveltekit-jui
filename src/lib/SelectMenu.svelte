<script>

  export let options = [{name: "Option 1"}];

  import Icon from '$lib/Icon.svelte';
  
  import createPopperAction from '$lib/usePopper.js';
  import { clickOutside } from '$lib/clickOutside.js';


  const [usePopperElement, usePopperToolip] = createPopperAction();
  import {trapFocus} from "$lib/trapFocus";
  let placement = 'bottom-start'

  let showMenu = false;

  function pop() {
    showMenu = !showMenu;
  }
  
  function handleClickOutside() {
    showMenu = !showMenu;
  }
  
  import SelectMenuItem from '$lib/SelectMenuItem.svelte';
  let activeIndex = 0;
  let activeIndexStr = '';
  $: activeIndexStr = activeIndex.toString();
  
  function handleSelectedState(event) {
     activeIndex = event.detail.text;
  }
  
  let trigger = 'Escape';

  function handleKeydown(e) {
    if (e.key == trigger) {
      showMenu = !showMenu;
    }
  }

</script>

<svelte:window on:keydown={handleKeydown}/>

<div
  tabindex="0"
  class="c-custom-select"
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
  use:usePopperToolip={{ placement: placement, modifiers: [{ name: 'offset', options: { offset: [0, 4],},},],}}
  use:clickOutside on:click_outside={handleClickOutside}
>
  <ul class="c-select-menu" use:trapFocus>
    {#each options as option, index}
      <SelectMenuItem on:sendValue={handleSelectedState} index={index} selected={index==activeIndexStr}>{option.name}</SelectMenuItem>
    {/each}
  </ul>
</div>
{/if}
