<script>
  export let checked = null;
  export let label = null;
  
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