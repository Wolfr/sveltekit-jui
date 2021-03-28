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


<span class="c-badge c-badge--{skin}">
  <slot />
</span>

<style lang="scss">

  @import "../scss/s-colors";
  @import "../scss/s-semantic-colors";
  @import "../scss/s-variables";

  .c-badge {
    color: #333;
    display: inline-block;
    background: #CCC;
    font-size: 1.3rem;
    padding: .6rem 1.2rem;
    border-radius: .8rem;
  }

  .c-badge--success {
    color: $color-green-500;
    background: $color-green-200;
  }

  .c-badge--error {
    color: $color-red-500;
    background: $color-red-200;
  }

</style>
