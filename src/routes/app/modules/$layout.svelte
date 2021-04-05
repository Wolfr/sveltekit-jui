<script>
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Nav from '$lib/Nav.svelte';
  import NavItem from '$lib/NavItem.svelte';
  import Avatar from '$lib/Avatar.svelte';  
  
</script>


<div style="display: flex; flex-direction: column; height: 100%;">

  <Navbar skin="gray-50">
    <Toolbar>
      <ToolbarGroup position="left">
        <ToolbarItem>
          <ToolbarTitle>My app</ToolbarTitle>
        </ToolbarItem>
        <ToolbarItem>
          <Nav>
            <NavItem href="/app/modules/todos">Todos</NavItem>
            <NavItem href="/app/modules/stats">Stats</NavItem>
            <NavItem href="/app/modules/settings">Settings</NavItem>
          </Nav>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup position="right">
        <ToolbarItem>
          <Avatar />
        </ToolbarItem>
        <ToolbarItem>
          <p><a href="/app">Sign out</p>
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </Navbar>

  <slot></slot>

</div>