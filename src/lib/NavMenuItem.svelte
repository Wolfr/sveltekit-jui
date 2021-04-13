<script>
  export let destructive = null;
  export let href = null;
  export let icon = null;
  
  import Icon from '$lib/Icon.svelte';
</script>

<li class="c-nav-menu__item" class:c-nav-menu__item--destructive={destructive}>
  <a {href}>
    {#if icon}
      <Icon {icon} />
    {/if}
    <slot />
  </a>
</li>
