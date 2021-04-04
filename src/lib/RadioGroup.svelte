<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function sendValue(item) {
	    dispatch('sendvalue', {
            text: item
        });
    }

    export let options;
    let activeIndex = 0;
    export let inline;
</script>

<div class="c-radio-group { inline ? 'c-radio-group--inline' : '' }">
  {#each options as item, index}
  <div class="c-radio">
    <label for="radio-{index+1}">
        <input
            type="radio"
            id="radio-{index+1}"
            name="group-radios"
            value={item}
            autocomplete="off"
            checked={activeIndex == index}
            on:change={ () => activeIndex = index}
            on:change={ () => sendValue(item) }
        >
        {item}
    </label>
  </div>
  {/each}
</div>