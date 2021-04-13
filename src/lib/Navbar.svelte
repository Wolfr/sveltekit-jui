<script>
  
  /*
    Navbar - Wrapper for navigation bars
    
    @export {enum} border - top, bottom
    @export {enum} skin - alt

  */
  export let borderPosition = "bottom";
  export let skin = null;

</script>

<div
  class="c-navbar"
  class:c-navbar--alt={skin=="alt"}
  class:c-navbar--bordered-top={borderPosition=="top"}
  class:c-navbar--bordered-bottom={borderPosition!="top"}
>
<slot />
</div>
