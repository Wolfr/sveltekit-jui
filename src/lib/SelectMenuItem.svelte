<script>
  import Icon from '$lib/Icon.svelte';
  export let selected
  
  function select() {
    selected = !selected
  }

  let activeIndex = 0;

  // Pass data
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function sendValue(item) {
    dispatch('sendvalue', {
      text: item
    });
  }

</script>

<li class="c-select-menu__item" tabindex="0" on:click={select}>
  {#if selected}
    <Icon icon="check" />
  {:else}
    <Icon icon="check" style="opacity: 0;"/>
  {/if}

  <slot />
</li>
