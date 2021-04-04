<script>
  export let checked = null;
  export let label = null;
  export let hideLabel = null;
  export let disabled = null;
  export let indeterminate = null;
  export let cssClass = null;

  function toggle() {
    checked = !checked;
  }
</script>

<div class="c-checkbox {cssClass}">
  <label>
    <input
      type="checkbox"
      bind:checked
      on:click={toggle}
      {disabled}
      data-indeterminate={indeterminate}
    />
    {#if !hideLabel}
      {label}
    {/if}
  </label>
</div>