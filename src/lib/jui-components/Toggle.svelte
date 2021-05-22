<script>
  export let checked = null;
  export let label = null;
  export let disabled = null;
  export let indeterminate = null;
  export let cssClass = null;

  function toggle() {
    checked = !checked;
  }
</script>

<div class="c-toggle {cssClass}">
  <input
    type="checkbox"
    bind:checked
    on:click={toggle}
    {disabled}
    data-indeterminate={indeterminate}
  />
  <div class="c-toggle__back"></div>
  <div class="c-toggle__knob"></div>
</div>