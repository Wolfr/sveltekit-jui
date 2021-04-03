<script>
  export let label;
  export let layoutType = null;
  export let type;
  export let value;
  export let id;
</script>

{#if !layoutType}
  <div class="o-form-group">
    <label class="o-form-group__label" for={id}>{label}</label>
    <div class="o-form-group__controls">
      <input class="c-input" {id} {type}>
    </div>
  </div>
{:else}
  <div class="o-form-group">
    <slot />
  </div>
{/if}