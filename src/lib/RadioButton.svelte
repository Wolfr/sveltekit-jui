<script>
  export let label;
  export let group;
  
  export let hideLabel = null;
  
</script>

<div class="c-radio">
  <label>
    <input type="radio" bind:group  />
    {#if !hideLabel}
      {label}
    {/if}
  </label>
</div>