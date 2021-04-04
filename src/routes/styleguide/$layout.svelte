<script>
  import Badge from '$lib/Badge.svelte';
  import Card from '$lib/Card.svelte';
  import Button from '$lib/Button.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';
  import Icon from '$lib/Icon.svelte';
  import Input from '$lib/Input.svelte';
  
  import Panel from '$lib/Panel.svelte';
  import PanelHeader from '$lib/PanelHeader.svelte';
  import PanelBody from '$lib/PanelBody.svelte';

  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  import FormGroup from '$lib/FormGroup.svelte';

  import SideMenu from '$lib/SideMenu.svelte';
  import SideMenuItem from '$lib/SideMenuItem.svelte';
  import SideMenuSectionHeader from '$lib/SideMenuSectionHeader.svelte';

  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Style guide';
</script>

<Navbar>
  <Toolbar>
    <ToolbarGroup position="left">
      <ToolbarItem>
        <ToolbarTitle>Styleguide</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<svelte:head>
    <title>{pageTitle} - Components - Style guide - JUI</title>
</svelte:head>

<div style="display: flex; height: calc( 100% - 5.6rem);">
  <div style="padding: 2.4rem 0; border-right: 1px solid #CED3DE; min-width: 24rem; overflow: auto">
    <!-- <div style="padding: 0 2.4rem 2.4rem;">
      <Input icon="search" type="search"  placeholder="Enter a search term..." />
    </div> -->
    <SideMenu>
        <SideMenuItem href="/styleguide/">Intro</SideMenuItem>
        <SideMenuSectionHeader>Dev notes</SideMenuSectionHeader>
        <SideMenuItem href="/styleguide/dev-notes/css-architecture">CSS architecture</SideMenuItem>
        <!-- <SideMenuSectionHeader>Design Patterns</SideMenuSectionHeader>
        <SideMenuItem href="/styleguide/design-patterns/forms">Forms</SideMenuItem> -->

        <SideMenuSectionHeader>Basics</SideMenuSectionHeader>
        <SideMenuItem href="/styleguide/basics/icons">Icons</SideMenuItem>
        <SideMenuItem href="/styleguide/basics/colors">Colors</SideMenuItem>
        <SideMenuItem href="/styleguide/basics/typography">Typography</SideMenuItem>
        <SideMenuSectionHeader>Objects</SideMenuSectionHeader>
        <SideMenuItem href="/styleguide/objects/form-group">Form group</SideMenuItem>
        <SideMenuItem href="/styleguide/objects/dynamic-grid">Dynamic grid</SideMenuItem>
        <SideMenuSectionHeader>Components</SideMenuSectionHeader>
        <SideMenuItem href="/styleguide/components/accordion">Accordion</SideMenuItem>
        <SideMenuItem href="/styleguide/components/accordion-item">Accordion Item</SideMenuItem>
        <SideMenuItem href="/styleguide/components/alert">Alert</SideMenuItem>
        <SideMenuItem href="/styleguide/components/avatar">Avatar</SideMenuItem>
        <SideMenuItem href="/styleguide/components/badge">Badge</SideMenuItem>
        <SideMenuItem href="/styleguide/components/button">Button</SideMenuItem>
        <SideMenuItem href="/styleguide/components/button-link">Button (Link)</SideMenuItem>
        <SideMenuItem href="/styleguide/components/button-toolbar">Button Toolbar</SideMenuItem>
        <SideMenuItem href="/styleguide/components/checkbox">Checkbox</SideMenuItem>
        <SideMenuItem href="/styleguide/components/input-text">Input (text)</SideMenuItem>
        <SideMenuItem href="/styleguide/components/menu-selection">Menu (selection)</SideMenuItem>
        <SideMenuItem href="/styleguide/components/modal">Modal</SideMenuItem>
        <SideMenuItem href="/styleguide/components/pagination">Pagination</SideMenuItem>
        <SideMenuItem href="/styleguide/components/panel">Panel</SideMenuItem>
        <!-- <SideMenuItem href="/styleguide/components/popover">Popover</SideMenuItem> -->
        <SideMenuItem href="/styleguide/components/radio-button">Radio button</SideMenuItem>
        <SideMenuItem href="/styleguide/components/radio-group">Radio group</SideMenuItem>
        <SideMenuItem href="/styleguide/components/side-menu">Side menu</SideMenuItem>
        <SideMenuItem href="/styleguide/components/spinner">Spinner</SideMenuItem>
        <SideMenuItem href="/styleguide/components/table">Table</SideMenuItem>
        <SideMenuItem href="/styleguide/components/toolbar">Toolbar</SideMenuItem>
        <SideMenuItem href="/styleguide/components/tooltip">Tooltip</SideMenuItem>
        <SideMenuSectionHeader>Utilities</SideMenuSectionHeader>
        <SideMenuItem href="/styleguide/utilities/spacer">Spacer</SideMenuItem>
        <SideMenuItem href="/styleguide/utilities/flex">Flex</SideMenuItem>
        <SideMenuItem href="/styleguide/utilities/display">Display</SideMenuItem>
    </SideMenu>
  </div>
  <div class="o-scroll-wrapper" style="flex-grow: 1;">
    <div class="o-scroll-wrapper__body" style="padding: 2.4rem;">
        <slot />
    </div>
  </div>
</div>
