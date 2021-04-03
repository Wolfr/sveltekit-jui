<script>
  import Icon from '$lib/Icon.svelte';

  export let href;
  export let icon;

</script>

<!--c-side-menu__item--active -->
<li class="c-side-menu__item">
  <a href={href}>
    {#if icon}
      <Icon icon="add" />
    {/if}
    <span><slot /></span>
  </a>
</li>