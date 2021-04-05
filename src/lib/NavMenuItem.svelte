<script>
  export let destructive;
  export let href;
</script>

<li class="c-nav-menu__item" class:c-nav-menu__item--destructive={destructive}>
  <a {href}>
    <slot />
  </a>
</li>
