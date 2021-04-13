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