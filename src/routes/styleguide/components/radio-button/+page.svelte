<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';

  import StyleguidePropsTable from '$lib/jui-components/StyleguidePropsTable.svelte';

  let pageTitle = 'Radio button';
  
  import Radio from '$lib/jui-components/Radio.svelte';

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
