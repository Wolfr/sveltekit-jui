<script>
  export let href;
  import { page } from '$app/stores';
</script>

<li class="c-nav__item { $page.path == href ? 'c-nav__item--active' : ''}">
  <a {href}><slot /></a>
</li>
