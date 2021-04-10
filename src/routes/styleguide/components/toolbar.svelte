<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import RichContent from '$lib/RichContent.svelte';

  import LinkButton from '$lib/LinkButton.svelte';
  import Button from '$lib/Button.svelte';

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

<RichContent>
  <p>The toolbar is meant as a generic construct to position tools. It provides a structure where you can position items on the left, in the center and on the right.</p>
  <p>The toolbar construct is used in many parts of the user interface: modals, panels, navbars and popovers all use the toolbar component to position elements in a consistent way.</p>
</RichContent>

<StyleguideCard title="Mobile" description="<p>A toolbar as it might appear in a mobile interface.</p>" code="&lt;Toolbar&gt;
  &lt;ToolbarGroup align=&quot;left&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;LinkButton href=&quot;/&quot; layout=&quot;icon&quot; icon=&quot;chevron-left&quot;&gt;Back&lt;/LinkButton&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
  &lt;ToolbarGroup align=&quot;center&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;ToolbarTitle&gt;Toolbar Title&lt;/ToolbarTitle&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
  &lt;ToolbarGroup align=&quot;right&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;LinkButton href=&quot;/&quot;&gt;Save&lt;/LinkButton&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
&lt;/Toolbar&gt;">
  <Toolbar>
    <ToolbarGroup align="left">
      <ToolbarItem>
        <LinkButton href="/" layout="icon" icon="chevron-left">Back</LinkButton>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup align="center">
      <ToolbarItem>
        <ToolbarTitle>Toolbar Title</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup align="right">
      <ToolbarItem>
        <LinkButton href="/">Save</LinkButton>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</StyleguideCard>

<StyleguideCard title="Mobile" description="<p>A toolbar as it might appear in a modal window (header).</p>" code="&lt;Toolbar&gt;
  &lt;ToolbarGroup align=&quot;left&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;ToolbarTitle&gt;Modal Title&lt;/ToolbarTitle&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
  &lt;ToolbarGroup align=&quot;right&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;LinkButton href=&quot;/&quot; layout=&quot;icon&quot; icon=&quot;close&quot;&gt;Back&lt;/LinkButton&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
&lt;/Toolbar&gt;">
  <Toolbar>
    <ToolbarGroup align="left">
      <ToolbarItem>
        <ToolbarTitle>Modal Title</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup align="right">
      <ToolbarItem>
        <LinkButton href="/" layout="icon" icon="close">Back</LinkButton>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</StyleguideCard>

<StyleguideCard title="Card Toolbar" description="<p>A toolbar as it might appear in a card.</p>" code="&lt;Toolbar&gt;
  &lt;ToolbarGroup align=&quot;left&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;ToolbarTitle&gt;Card Title&lt;/ToolbarTitle&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
  &lt;ToolbarGroup align=&quot;right&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;Button href=&quot;/&quot; icon=&quot;edit&quot;&gt;Edit&lt;/Button&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
&lt;/Toolbar&gt;">
  <Toolbar>
    <ToolbarGroup align="left">
      <ToolbarItem>
        <ToolbarTitle>Card Title</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup align="right">
      <ToolbarItem>
        <Button href="/" icon="edit">Edit</Button>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</StyleguideCard>


<StyleguideCard title={pageTitle} code="&lt;Toolbar&gt;
  &lt;ToolbarGroup align=&quot;left&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;ToolbarTitle&gt;Toolbar Title&lt;/ToolbarTitle&gt;
    &lt;/ToolbarItem&gt;
    &lt;ToolbarItem&gt;
      &lt;p&gt;Item&lt;/p&gt;
    &lt;/ToolbarItem&gt;
    &lt;ToolbarItem&gt;
      &lt;p&gt;Item&lt;/p&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
  &lt;ToolbarGroup align=&quot;right&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;p&gt;Item&lt;/p&gt;
    &lt;/ToolbarItem&gt;
    &lt;ToolbarItem&gt;
      &lt;p&gt;Item&lt;/p&gt;
    &lt;/ToolbarItem&gt;
    &lt;ToolbarItem&gt;
      &lt;p&gt;Item&lt;/p&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
&lt;/Toolbar&gt;">
  <Toolbar>
    <ToolbarGroup align="left">
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
    <ToolbarGroup align="right">
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
