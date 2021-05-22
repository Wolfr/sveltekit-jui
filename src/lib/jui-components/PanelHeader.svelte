<script>
  export let title = null;
</script>

<div class="c-panel__header">
  <slot name="panel-header">
    <h3 class="c-toolbar__title">{title}</h3>
  </slot>
</div>
