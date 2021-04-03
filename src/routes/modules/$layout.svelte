<script>
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Nav from '$lib/Nav.svelte';
  import NavItem from '$lib/NavItem.svelte';
</script>

<Navbar skin="gray-50">
  <Toolbar>
    <ToolbarGroup position="left">
      <ToolbarItem>
        <ToolbarTitle>My app</ToolbarTitle>
      </ToolbarItem>
      <ToolbarItem>
        <Nav>
          <NavItem href="/modules/todos">Todos</NavItem>
          <NavItem href="/modules/stats">Stats</NavItem>
          <NavItem href="/modules/settings">Settings</NavItem>
        </Nav>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup position="right">
      <ToolbarItem>
        <p><a href="/">Sign out</p>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<slot></slot>
