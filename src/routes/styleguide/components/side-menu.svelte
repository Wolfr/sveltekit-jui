<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Side menu';

  import SideMenu from '$lib/SideMenu.svelte';
  import SideMenuItem from '$lib/SideMenuItem.svelte';
  import SideMenuSectionHeader from '$lib/SideMenuSectionHeader.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <SideMenu>
    <SideMenuItem href="/">Item 1</SideMenuItem>
    <SideMenuItem href="/">Item 2</SideMenuItem>
    <SideMenuItem href="/">Item 3</SideMenuItem>
  </SideMenu>
</StyleguideCard>

<StyleguideCard title="With sections">
  <SideMenu>
    <SideMenuSectionHeader href="/">Section 1</SideMenuSectionHeader>
    <SideMenuItem href="/">Item 1</SideMenuItem>
    <SideMenuItem href="/">Item 2</SideMenuItem>
    <SideMenuItem href="/">Item 3</SideMenuItem>
    <SideMenuSectionHeader href="/">Section 2</SideMenuSectionHeader>
    <SideMenuItem href="/">Item 1</SideMenuItem>
    <SideMenuItem href="/">Item 2</SideMenuItem>
    <SideMenuItem href="/">Item 3</SideMenuItem>
  </SideMenu>
</StyleguideCard>


<StyleguideCard title="With icons">
  <SideMenu>
    <SideMenuItem icon="add" href="/">Item 1</SideMenuItem>
    <SideMenuItem icon="edit" href="/">Item 2</SideMenuItem>
    <SideMenuItem icon="delete" href="/">Item 3</SideMenuItem>
  </SideMenu>
</StyleguideCard>
