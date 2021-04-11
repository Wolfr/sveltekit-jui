<script>
  export let options;
  export let inline = null;
  export let uuid;

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

<div class="c-radio-group { inline ? 'c-radio-group--inline' : '' }">
  {#each options as item, index}
  <div class="c-radio">
    <label for={uuid+index}>
        <input
            type="radio"
            id={uuid+index}
            name={uuid}
            value={uuid+index}
            autocomplete="off"
            checked={item.checked}
            disabled={item.disabled}
            on:change={ () => activeIndex = index}
            on:change={ () => sendValue(item) }
        >
        {item.name}
    </label>
  </div>
  {/each}
</div>