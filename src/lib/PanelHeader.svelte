<script>
  export let title;
	export let minimal = false;
</script>


<div class="c-panel__header {minimal ? 'c-panel__header--minimal' : ''}">
  <slot name="panel-header">
    <h3>{title}</h3>
  </slot>
</div>
