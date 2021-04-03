<script>
  export let title = null;
  export let code = null;
</script>

{#if title}
<h3 class="c-h3">{title}</h3>
{/if}

<div class="c-card u-spacer-bottom">
  <div class="c-card__content">
    <slot />
  </div>
</div>

{#if code}
  <pre class="c-pre"><code>{code}</code></pre>
{/if}