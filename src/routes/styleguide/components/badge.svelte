<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import SideMenu from "$lib/SideMenu.svelte";
  import SideMenuItem from "$lib/SideMenuItem.svelte";
  import SideMenuSectionHeader from "$lib/SideMenuSectionHeader.svelte";

  let pageTitle = 'Badge';
  
  import Badge from '$lib/Badge.svelte';

  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let propsTable = [
    {
      name: 'skin',
      description: 'Changes the look of the badge.',
      required: false,
      options: [
        {
          name: 'default',
          default: true
        },
        {
          name: 'success',
          default: false
        },
        {
          name: 'warning',
          default: false
        },
        {
          name: 'danger',
          default: false
        }
      ]
    },
    
  ]
  
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Badge skins"
code="&lt;Badge&gt;Default&lt;/Badge&gt;
&lt;Badge skin=&quot;success&quot;&gt;Success&lt;/Badge&gt;
&lt;Badge skin=&quot;warning&quot;&gt;Warning&lt;/Badge&gt;
&lt;Badge skin=&quot;danger&quot;&gt;Danger&lt;/Badge&gt;">
  <Badge>Default</Badge>
  <Badge skin="success">Success</Badge>
  <Badge skin="warning">Warning</Badge>
  <Badge skin="danger">Danger</Badge>
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
<br />

<StyleguideCard style="overflow: hidden" title="Component Details">
  <ul class="c-bordered-list c-bordered-list--small">
    <li>
      <span>Forwarded Events</span>
      <ul>
        <li><span>on:click</span></li>
        <li><span>on:mouseover</span></li>
        <li><span>on:mouseenter</span></li>
        <li><span>on:mouseleave</span></li>
      </ul>
    </li>
    <li>
        <span>Slots</span>
        <ul>
          <li><span>Default</span></li>
        </ul>
    </li>
    <li>
      <span>Dispatch Events</span>
      <ul>
        <li><span>None</span></li>
      </ul>
    </li>
  </ul>
</StyleguideCard>