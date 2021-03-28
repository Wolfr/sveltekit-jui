<script>
  
  /*
    Navbar - Wrapper for navigation bars
    
    @export {enum} border - top, bottom

  */
  export let border = "bottom";

</script>

{#if border == "top"}
  <div class="c-navbar c-navbar--bordered-top"><slot /></div>
{:else}
  <div class="c-navbar c-navbar--bordered-bottom"><slot /></div>
{/if}