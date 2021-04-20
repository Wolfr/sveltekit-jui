<script>

  import Navbar from '$lib/Navbar.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

  import Input from '$lib/Input.svelte';
  
  import LinkButton from '$lib/LinkButton.svelte';

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
      url: "container",
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
      url: 'bordered-list',
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
      url: 'card',
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
      url: 'key-value',
      category: 'components'
    },
    {
      url: 'media-card',
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
      url: 'list',
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
    // {
    //   url: 'popover',
    //   category: 'components'
    // },
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
    // {
    //   url: 'tooltip',
    //   category: 'components'
    // },
    // {
    //   url: 'display',
    //   category: 'utilities'
    // },
    // {
    //   url: 'spacer',
    //   category: 'utilities'
    // },
    // {
    //   url: 'flex',
    //   category: 'utilities'
    // }
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

  // Scroll saving styleguide tree
  import { scrollStyleguideValue } from '$lib/scroll-track-styleguide.js';

  let scrollTop = 0;
  let itemElement;
  import { onMount } from 'svelte';
  onMount( () => {
    itemElement.scrollTop = $scrollStyleguideValue;
    
  });

  $: {
    if (scrollTop > 0) {
      $scrollStyleguideValue = scrollTop;
    }
  }
  
</script>

<Navbar>
  <Toolbar>
    <ToolbarGroup align="left">
      <ToolbarItem>
        <ToolbarTitle>Styleguide</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup align="right">
      <ToolbarItem>
        <LinkButton href="https://github.com/Wolfr/sveltekit-jui">View on Github</LinkButton>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<svelte:head>
  <title>{pageTitle} - Components - Style guide - JUI</title>
</svelte:head>

<div class="c-styleguide-wrapper">
  <div
    class="c-styleguide-sidebar" 
    on:scroll={ ({target}) => scrollTop = target.scrollTop}
    bind:this={itemElement}
  >
    
    <!-- <div style="padding: 0 2.4rem 2.4rem;">
      <Input icon="search" type="search"  placeholder="Enter a search term..." />
    </div> -->

    <a href="#detail" class="u-d-sr-accessible">Skip to detail</a>
    
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
    <div class="o-scroll-wrapper__body" style="padding: 2.4rem;" id="detail">
        <slot />
    </div>
  </div>
</div>

<style>

  .c-styleguide-wrapper {
    display: flex; height: calc( 100% - 5.6rem);
  }

</style>