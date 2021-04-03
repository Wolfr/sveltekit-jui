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
      name: 'classValue',
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
      name: 'variant',
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
          name: 'borderless',
          default: false
        }
      ]
    }
  ]

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Button layouts" code="&lt;Button&gt;A button&lt;/Button&gt;
&lt;Button variant=&quot;primary&quot;&gt;A button&lt;/Button&gt;
&lt;Button icon=&quot;add&quot;&gt;A button&lt;/Button&gt;
&lt;Button icon=&quot;add&quot; layout=&quot;icon&quot;&gt;A button&lt;/Button&gt;
&lt;Button icon=&quot;chevron-right&quot; layout=&quot;label-icon&quot;&gt;A button&lt;/Button&gt;">
  <Button>A button</Button>
  <Button variant="primary">A button</Button>
  <Button icon="add">A button</Button>
  <Button icon="add" layout="icon">A button</Button>
  <Button icon="chevron-right" layout="label-icon">A button</Button>
</StyleguideCard>

<StyleguideCard
  title="Button skins"
  code="&lt;Button&gt;Secondary button&lt;/Button&gt;
&lt;Button variant=&quot;primary&quot;&gt;Primary button&lt;/Button&gt;
&lt;Button variant=&quot;borderless&quot;&gt;Borderless button&lt;/Button&gt;"
>
  <Button>Secondary button</Button>
  <Button variant="primary">Primary button</Button>
  <Button variant="borderless">Borderless button</Button>
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />