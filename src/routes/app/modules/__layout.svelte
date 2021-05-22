<script>
  import Toolbar from '$lib/jui-components/Toolbar.svelte';
  import ToolbarGroup from '$lib/jui-components/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/jui-components/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/jui-components/ToolbarTitle.svelte';
  import Navbar from '$lib/jui-components/Navbar.svelte';
  import Nav from '$lib/jui-components/Nav.svelte';
  import NavItem from '$lib/jui-components/NavItem.svelte';
  import Avatar from '$lib/jui-components/Avatar.svelte';  
  
</script>


<div style="display: flex; flex-direction: column; height: 100%;">

  <Navbar skin="alt">
    <Toolbar>
      <ToolbarGroup align="left">
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
      <ToolbarGroup align="right">
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