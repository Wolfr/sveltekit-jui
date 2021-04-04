<script>
  export let compact = null;
</script>

<div class="c-button-toolbar { compact ? 'c-button-toolbar--compact' : '' }">
  <slot />
</div>