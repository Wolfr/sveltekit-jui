<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  import Icon from '$lib/Icon.svelte';
  export let selected;
  export let index;

  function sendValue(index) {
    dispatch('sendValue', {
      text: index
    });
  }

</script>

<li class="c-select-menu__item">
  <button tabindex="0" on:click={() => sendValue(index)}>
    {#if selected}
      <Icon icon="check" />
      {:else}
      <Icon icon="check" style="opacity: 0;"/>
    {/if}
    <div style="white-space: nowrap"><slot /></div>
  </button>
</li>
