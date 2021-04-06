<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Radio button';
  
  import Radio from '$lib/Radio.svelte';

  let propsTable = [
    {
      name: 'checked',
      description: 'Set checkbox as checked',
      required: false,
    },
    {
      name: 'disabled',
      description: 'Disable the checkbox',
      required: false,
    },
  ]
  
</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Radio checked label="Label" />
</StyleguideCard>


<StyleguideCard title="Disabled radio button">
  <Radio disabled label="Label" />
  <br>
  <Radio disabled checked label="Label" />
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
