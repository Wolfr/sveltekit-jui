<script>
  
  /*
    Navbar - Wrapper for navigation bars
    
    @export {enum} border - top, bottom

  */
  export let borderPosition = "bottom";
  export let skin = "white";

</script>

{#if borderPosition == "top"}
  <div class="c-navbar c-navbar--{skin} c-navbar--bordered-top"><slot /></div>
{:else}
  <div class="c-navbar c-navbar--{skin} c-navbar--bordered-bottom"><slot /></div>
{/if}