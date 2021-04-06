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

<StyleguideIntro title={pageTitle} content="<p>Use in conjunction with <code>Toolbar</code> to house controls.</p>"/>

<StyleguideCard title={pageTitle}>
  <Navbar>

  </Navbar>
</StyleguideCard>

<StyleguideCard title="Gray variant">
  <Navbar skin="gray-50">
  </Navbar>

</StyleguideCard>

<StyleguideCard title="Border top">
  <Navbar borderPosition="top">
  </Navbar>

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />