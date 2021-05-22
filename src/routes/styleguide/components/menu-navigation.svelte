<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';

  let pageTitle = 'Menu (Navigation)';

  import NavMenu from '$lib/jui-components/NavMenu.svelte';
  import NavMenuItem from '$lib/jui-components/NavMenuItem.svelte';
  import NavMenuDivider from '$lib/jui-components/NavMenuDivider.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle} style="height: 40rem;">

    <NavMenu type="icon" sameWidth=0>
      <NavMenuItem icon="eye" href="/">View</NavMenuItem>
      <NavMenuItem icon="edit" href="/">Edit</NavMenuItem>
      <NavMenuItem icon="delete" href="/">Delete</NavMenuItem>
    </NavMenu>

</StyleguideCard>


<StyleguideCard title={pageTitle} style="height: 40rem;">

    <NavMenu>
      <NavMenuItem href="/">Action 1</NavMenuItem>
      <NavMenuItem href="/">Action 2</NavMenuItem>
      <NavMenuItem href="/">Action 3</NavMenuItem>
      <NavMenuDivider />
      <NavMenuItem destructive href="/">Destructive action</NavMenuItem>
    </NavMenu>

</StyleguideCard>

