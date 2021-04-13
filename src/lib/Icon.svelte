<script>

  import SvgIcon from '$lib/SvgIconGenerated.svelte';

  export let type = "icon-font";
  export let icon;
  export let iconAnimatedClass = null;
  export let style = null;
  // SVG only
  export let size = null;

</script>

{#if type == "svg"}
  <SvgIcon {icon} {iconAnimatedClass} {size} />
{/if}

{#if type == "icon-font"}
  <i class="c-icon mi mi-{icon} {iconAnimatedClass ? iconAnimatedClass : ''}" {style}></i>
{/if}


