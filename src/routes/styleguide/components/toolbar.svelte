<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

  let pageTitle = 'Toolbar';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<p>Use the toolbar to position elements to the left and right.</p>

<StyleguideCard title={pageTitle}>
  <Toolbar>
    <ToolbarGroup position="left">
      <ToolbarItem>
        <ToolbarTitle>Toolbar Title</ToolbarTitle>
      </ToolbarItem>
      <ToolbarItem>
        <p>Item</p>
      </ToolbarItem>
      <ToolbarItem>
        <p>Item</p>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup position="right">
      <ToolbarItem>
        <p>Item</p>
      </ToolbarItem>
      <ToolbarItem>
        <p>Item</p>
      </ToolbarItem>
      <ToolbarItem>
        <p>Item</p>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</StyleguideCard>
