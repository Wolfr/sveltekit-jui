<script>
  export let checked;
  export let label;
  
  export let hideLabel = null;
  
  function toggle() {
    checked = !checked;
  }
</script>

<div class="c-checkbox">
  <label>
    <input type="checkbox" bind:checked on:click={toggle} />
    {#if !hideLabel}
      {label}
    {/if}

  </label>
</div>