<script>

  import Nav from '$lib/Nav.svelte';
  import NavItem from '$lib/NavItem.svelte';

</script>

<div style="overflow: scroll; height: 100%;">

  <div class="u-spacer-l">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <h1 class="c-h3"><a href="/site">My website</a></h1>

      <Nav>
        <NavItem href="/site">Home</NavItem>
        <NavItem href="/site/about">About</NavItem>
        <NavItem href="/site/blog">Blog</NavItem>
        <NavItem href="/site/contact">Contact</NavItem>
      </Nav>
    </div>
  </div>

  <slot />

</div>
