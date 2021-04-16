<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Link button';
  
  import LinkButton from '$lib/LinkButton.svelte';

  let propsTable = [
    {
      name: 'icon',
      description: 'Determines icon shown.',
      required: false,
    },
    {
      name: 'cssClass',
      description: 'Used to add an extra CSS class.',
      required: false,
    },
    {
      name: 'disabled',
      required: false,
    },
    {
      name: 'style',
      required: false,
    },
    {
      name: 'layout',
      description: 'Determines button layout',
      required: false,
      options: [
        {
          name: 'icon-only',
          default: false
        },
        {
          name: 'label-icon',
          default: false
        }
        
      ]
    },
    {
      name: 'skin',
      description: 'Determines button look',
      default: 'secondary',
      required: false,
      options: [
        {
          name: 'muted',
          default: false
        },
      ]
    }
  ]

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard>
    <LinkButton icon="add">Test</LinkButton>
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
<br>
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
      <span>Dispatched Events</span>
      <ul>
        <li><span>None</span></li>
      </ul>
    </li>
  </ul>
</StyleguideCard>