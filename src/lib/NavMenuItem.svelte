<script>
  export let destructive;
  export let href;
  export let icon;
  
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
