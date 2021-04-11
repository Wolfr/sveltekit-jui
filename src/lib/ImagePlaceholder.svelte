<script>
  export let alt;
  export let aspect = "16:9"
  import Icon from '$lib/Icon.svelte';
</script>

<div
  class="c-image-placeholder"
  class:c-image-placeholder--aspect-16-10={ aspect == "16:10"}
  class:c-image-placeholder--aspect-16-9={ aspect == "16:9"}
  class:c-image-placeholder--aspect-4-3={ aspect == "4:3"}
>
  <div class="c-image-placeholder__inner">
    <Icon type="svg" icon="image" size="36" />
  </div>
</div>