<script>
  export let cssClass = null;
</script>

<div class="c-card {cssClass}">
  <div class="c-card__content">
    <slot />
  </div>
</div>