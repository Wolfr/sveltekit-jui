<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Button';
  
  import Button from '$lib/Button.svelte';

  let propsTable = [
    {
      name: 'icon',
      description: 'Determines icon shown.',
      required: false,
    },
    {
      name: 'type',
      description: 'Determines tag type used (button or input type submit).',
      required: false,
      options: [
        {
          name: 'submit',
        },
      ]
    },
    {
      name: 'cssClass',
      description: 'Used to add an extra CSS class.',
      required: false,
    },
    {
      name: 'href',
      description: 'If used, automatically changes button to be a link.',
      required: false,
    },
    {
      name: 'disabled',
      required: false,
    },
    {
      name: 'block',
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
          name: 'primary',
          default: false
        },
        {
          name: 'secondary',
          default: true
        },
        {
          name: 'tertiary',
          default: true
        },
        {
          name: 'borderless',
          default: false
        },
        {
          name: 'danger',
          default: false
        },
        {
          name: 'danger-hover',
          default: false
        }
      ]
    }
  ]

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Button layouts">
  <Button>A button</Button>
  <Button skin="primary">A button</Button>
  <Button icon="add">Add</Button>
  <Button icon="add" layout="icon">Add</Button>
  <Button icon="chevron-right" layout="label-icon">Next</Button>
</StyleguideCard>

<StyleguideCard title="Button skins">
  <Button>Secondary button</Button>
  <Button skin="primary">Primary button</Button>
  <Button skin="tertiary">Tertiary button</Button>
  <Button skin="borderless">Borderless button</Button>
</StyleguideCard>

<StyleguideCard title="Danger buttons">
  <Button skin="danger">Danger button</Button>
  <Button skin="danger-hover">Danger on hover button</Button>
</StyleguideCard>

<StyleguideCard title="Disabled buttons">
  <Button skin="primary" disabled>Primary button</Button>
  <Button skin="tertiary" disabled>Tertiary button</Button>
  <Button skin="danger" disabled>Danger button</Button>
  <Button skin="danger-hover" disabled>Danger on hover button</Button>
  <Button skin="borderless" disabled>Borderless button</Button>
</StyleguideCard>



<StyleguidePropsTable propsTable={propsTable} />