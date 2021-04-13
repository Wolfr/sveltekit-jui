<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'List View';

  import List from '$lib/List.svelte';
  import ListItem from '$lib/ListItem.svelte';
</script>


<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Text items">
  <List>
    <ListItem><span slot="first-line">Content</span></ListItem>
    <ListItem><span slot="first-line">Content</span></ListItem>
  </List>
</StyleguideCard>
<StyleguideCard title="Users">
  <List>
    <ListItem type="avatar" initials="JD" itemUrl="/">
      <span slot="first-line">John Doe</span>
      <span slot="second-line">jdoe@microsoft.com</span>
    </ListItem>
    <ListItem type="avatar" initials="JD" itemUrl="/">
      <span slot="first-line">Jane Doe</span>
      <span slot="second-line">jdoe@microsoft.com</span>
    </ListItem>
  </List>
</StyleguideCard>
<StyleguideCard title="Icons">
  <List>
    <ListItem type="icon" icon="grid" href="./pagac-buildings/details">
      <span slot="first-line">Item name</span>
    </ListItem>
    <ListItem type="icon" icon="folder" href="/">
      <span slot="first-line">Item name</span>
    </ListItem>
    <ListItem type="icon" icon="users" href="/">
      <span slot="first-line">Item name</span>
    </ListItem>
    <ListItem type="icon" icon="message" href="/">
      <span slot="first-line">Item name</span>
    </ListItem>
  </List>
</StyleguideCard>
<StyleguideCard title="Toggles">
  <List>
    <ListItem type="checkbox" checked><p>Item name</p></ListItem>
    <ListItem type="checkbox"><p>Item name</p></ListItem>
    <ListItem type="checkbox"><p>Item name</p></ListItem>
  </List>
</StyleguideCard>

