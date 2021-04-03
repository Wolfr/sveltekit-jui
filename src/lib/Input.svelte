<script>
  export let value = null;
  export let type = "text";
  export let placeholder;
</script>

<input class="c-input" {placeholder} type="text" bind:value={value}  />
