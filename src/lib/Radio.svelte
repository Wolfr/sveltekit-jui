<script>
  export let label = null;
  export let group = null;
  export let hideLabel = null;
  export let disabled = null;
</script>

<div class="c-radio">
  <label>
    <input type="radio" {disabled} bind:group  />
    {#if !hideLabel}
      {label}
    {/if}
  </label>
</div>