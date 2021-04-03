<script>
  export let label;
  export let type;
  export let value;
  export let id;
</script>

<div class="o-form-group">
  <slot />

  <label class="o-form-group__label" for={id}>{label}</label>
  <div class="o-form-group__controls">
    <input class="c-input" {id} {type}>
  </div>
  
</div>