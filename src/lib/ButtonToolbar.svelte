<script>
  export let compact = null;
  export let vertical = null;
</script>

<div
  class="c-button-toolbar" role="toolbar"
  class:c-button-toolbar--compact={compact}
  class:c-button-toolbar--vertical={vertical}
>
  <slot />
</div>