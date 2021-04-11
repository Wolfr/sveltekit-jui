<script>

  import SvgIcon from '$lib/SvgIconGenerated.svelte';

  export let type = "icon-font";
  export let icon;
  export let iconAnimatedClass = null;
  export let style = null;
  // SVG only
  export let size = '20';

</script>

{#if type == "svg"}
  <SvgIcon {icon} {iconAnimatedClass} {size} />
{/if}

{#if type == "icon-font"}
  <div class="c-icon c-icon--icon-font {iconAnimatedClass ? iconAnimatedClass : ''}">
    <i class="mi mi-{icon}" {style}></i>
  </div>
{/if}


