<script>

  /*
    Pill - Create a pill

    @export {string} icon - icon name
    @export {string} skin - the skin of the badge (default, success, error, warning, primary)
    @export {string} layout - the layout (passed to PillInnerLayout) (Similar to ButtonInnerLayout)
  */

  export let skin = null;
  export let size = null;
  
</script>

<span class="c-pill {skin ? 'c-pill--'+skin : 'c-pill--default'}">
  <slot />
</span>
