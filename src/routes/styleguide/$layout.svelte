<script>

  import Navbar from '$lib/Navbar.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

  import Input from '$lib/Input.svelte';

  import SideMenu from '$lib/SideMenu.svelte';
  import SideMenuItem from '$lib/SideMenuItem.svelte';
  import SideMenuSectionHeader from '$lib/SideMenuSectionHeader.svelte';

  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Style guide';

  let data = [
    {
      prettyName: "CSS architecture",
      url: "css-architecture",
      category: "dev-notes",
    },
    {
      url: "css-component-template",
      prettyName: "CSS component template",
      category: "dev-notes",
    },
    {
      url: "technical-notes",
      category: "dev-notes",
    },
    {
      url: "icons",
      category: "basics"
    },
    {
      url: "typography",
      category: "basics"
    },
    {
      url: "colors",
      category: "basics"
    },
    {
      url: "dynamic-grid",
      category: "objects"
    },
    {
      url: "form-group",
      category: "objects"
    },
    {
      url: "accordion",
      category: "components"
    },
    {
      url: 'alert-stack',
      category: 'components'
    },
    {
      url: 'alert',
      category: 'components'
    },
    {
      url: 'avatar',
      category: 'components'
    },
    {
      url: 'badge',
      category: 'components'
    },
    {
      url: 'button-link',
      category: 'components',
      prettyName: 'Button (link)'
    },
    {
      url: 'button-toolbar',
      category: 'components'
    },
    {
      url: 'button',
      category: 'components'
    },
    {
      url: 'checkbox',
      category: 'components'
    },
    {
      url: 'input-text',
      category: 'components'
    },
    {
      url: 'menu-navigation',
      category: 'components'
    },
    {
      url: 'menu-selection',
      category: 'components'
    },
    {
      url: 'modal',
      category: 'components'
    },
    {
      url: 'navbar',
      category: 'components'
    },
    {
      url: 'pagination',
      category: 'components'
    },
    {
      url: 'panel',
      category: 'components'
    },
    {
      url: 'popover',
      category: 'components'
    },
    {
      url: 'radio-button',
      category: 'components'
    },
    {
      url: 'radio-group',
      category: 'components'
    },
    {
      url: 'side-menu',
      category: 'components'
    },
    {
      url: 'spinner',
      category: 'components'
    },
    {
      url: 'table',
      category: 'components'
    },
    {
      url: 'toolbar',
      category: 'components'
    },
    {
      url: 'tooltip',
      category: 'components'
    },
    {
      url: 'display',
      category: 'utilities'
    },
    {
      url: 'spacer',
      category: 'utilities'
    },
    {
      url: 'flex',
      category: 'utilities'
    }
  ]

  let groups = data.reduce((curr, val) => {
    let group = curr.find(g => g.category === `${val.category}`)
    if (group) {
      group.values.push(val)
    } else {
      curr.push({ category: `${val.category}`, values: [ val ] }) 
    }
    return curr
  }, [])
  
  function prettyTitle(title) {
    title = title.replace(/-/, " ");
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
  }

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

<div class="c-styleguide-wrapper">
  <div class="c-styleguide-sidebar">

    <!-- <div style="padding: 0 2.4rem 2.4rem;">
      <Input icon="search" type="search"  placeholder="Enter a search term..." />
    </div> -->

    <SideMenu>
      <SideMenuItem href="/styleguide/">Intro</SideMenuItem>
      {#each groups as group}
        <SideMenuSectionHeader>{group.category}</SideMenuSectionHeader>
        {#each group.values as item}
          <SideMenuItem href="/styleguide/{group.category}/{item.url}">{#if item.prettyName}{item.prettyName}{:else}{prettyTitle(item.url)}{/if}</SideMenuItem>
        {/each}
      {/each}
    </SideMenu>

  </div>
  <div class="o-scroll-wrapper" style="flex-grow: 1;">
    <div class="o-scroll-wrapper__body" style="padding: 2.4rem;">
        <slot />
    </div>
  </div>
</div>

<style>

  .c-styleguide-wrapper {
    display: flex; height: calc( 100% - 5.6rem);
  }
  
  .c-styleguide-sidebar {
    padding: 2.4rem 0;
    border-right: 1px solid #CED3DE;
    min-width: 24rem;
    overflow: auto;
  }

</style>