<script>
  export let value = null;
  export let type = "text";
</script>

<input class="c-input" type="text" bind:value={value}  />

<style lang="scss">

  .c-input {
    font-size: 1.6rem;
    border: .1rem solid #CCC;
    padding: .6rem 1.2rem;
    border-radius: .2rem;
  }

</style>
