<script>
  export let cssClass = null;
  export let href = null;
</script>

<div class="c-card {cssClass}" class:c-card--interactive={href}>
  {#if href}
    <a {href} class="c-card__inner c-card__inner--interactive">
      <div class="c-content">
        <slot />
      </div>
    </a>
  {:else}
    <div class="c-card__inner">
      <div class="c-content">
        <slot />
      </div>
    </div>
  {/if}
</div>