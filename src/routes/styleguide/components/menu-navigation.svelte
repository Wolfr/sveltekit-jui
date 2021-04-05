<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Menu (Navigation)';

  import NavMenu from '$lib/NavMenu.svelte';
  import NavMenuItem from '$lib/NavMenuItem.svelte';
  import NavMenuDivider from '$lib/NavMenuDivider.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

    <NavMenu>
      <NavMenuItem href="/">Action 1</NavMenuItem>
      <NavMenuItem href="/">Action 2</NavMenuItem>
      <NavMenuItem href="/">Action 3</NavMenuItem>
      <NavMenuDivider />
      <NavMenuItem destructive href="/">Destructive action</NavMenuItem>
    </NavMenu>

</StyleguideCard>

