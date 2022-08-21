<script>
  
  /*
    Badge - Create a badge
    
    @export {string} size - the size of a badge (regular, small)
    @export {string} icon - icon name
    @export {string} skin - the skin of the badge (default, success, error, warning, primary)
  */

  // Todo...

  export let skin = null;
  export let size = null;
  
</script>


<span class="c-badge {skin ? 'c-badge--'+skin : 'c-badge--default'}">
  <slot />
</span>
