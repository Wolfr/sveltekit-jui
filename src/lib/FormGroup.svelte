<script>
  export let label = null;
  export let layoutType = null;
  export let type = null;
  export let value = null;
  
  import { v4 as uuid } from '@lukeed/uuid';
  export let id = uuid();

  export let cssClass = null;
</script>

{#if !layoutType}
  <div class="o-form-group {cssClass}">
    <label class="o-form-group__label" for={id}>{label}</label>
    <div class="o-form-group__controls">
      <input class="c-input" {id} {type}>
    </div>
  </div>
{:else}
  <div class="o-form-group {cssClass}">
    <slot />
  </div>
{/if}