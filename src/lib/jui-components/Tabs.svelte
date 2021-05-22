<script>
    import { onMount } from "svelte";

    export let items = [];
    export let activeTabValue;

    onMount(() => {
        // Set default tab value
        if (Array.isArray(items) && items.length && items[0].value) {
            activeTabValue = items[0].value;
        }
    });

    const handleClick = tabValue => () => (activeTabValue = tabValue);

</script>


<ul class="c-tabs">
  {#if Array.isArray(items)}
    {#each items as item}
      <li
        class="c-tabs__item"
        class:c-tabs__item--active={activeTabValue === item.value}
      >
        <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
    {/each}
  {/if}
</ul>