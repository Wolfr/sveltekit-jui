<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';
  
  import Navbar from '$lib/Navbar.svelte';

  let pageTitle = 'Navbar';

  let propsTable = [
    {
      name: 'skin',
      description: 'Determines look.',
      options: [
        {
          name: 'alt',
          default: false
        },
      ],
      required: false,
    },
    {
      name: 'borderPosition',
      description: 'Determines the border position.',
      required: false,
      options: [
        {
          name: 'top',
          default: false
        },
        {
          name: 'bottom',
          default: true
        }
      ]
    }
  ]
  
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} content="<p>Use in conjunction with <code>Toolbar</code> to house controls.</p>"/>

<StyleguideCard title={pageTitle} code="&lt;Navbar&gt;&lt;/Navbar&gt;">
  <Navbar></Navbar>
</StyleguideCard>

<StyleguideCard title="Alternate variant" code="&lt;Navbar skin=&quot;gray-50&quot;&gt;&lt;/Navbar&gt;">
  <Navbar skin="alt"></Navbar>
</StyleguideCard>

<StyleguideCard title="Border top" code="&lt;Navbar borderPosition=&quot;top&quot;&gt;&lt;/Navbar&gt;">
  <Navbar borderPosition="top"></Navbar>
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />