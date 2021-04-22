<script>
  import Icon from '$lib/Icon.svelte';

  export let href;
  export let icon = null;
  import { page } from '$app/stores';

</script>

<li class="c-side-menu__item { $page.path == href ? 'c-side-menu__item--active' : ''}">
  <a href={href}>
    {#if icon}
      <Icon {icon} />
    {/if}
    <span><slot /></span>
  </a>
</li>
