<script>
  export let cssClass = null;
</script>

<div class="c-card {cssClass}">
  <div class="c-card__content">
    <div class="c-content">
      <slot />
    </div>
  </div>
</div>