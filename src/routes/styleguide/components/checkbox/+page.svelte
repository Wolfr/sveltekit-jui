<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';

  import StyleguidePropsTable from '$lib/jui-components/StyleguidePropsTable.svelte';
  let pageTitle = 'Checkbox';
  
  import Checkbox from '$lib/jui-components/Checkbox.svelte';

  let propsTable = [
    {
      name: 'checked',
      description: 'Set checkbox as checked',
      required: false,
    },
    {
      name: 'indeterminate',
      description: 'Indeterminate (requires checked)',
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

  <Checkbox checked label="Label" />

</StyleguideCard>

<StyleguideCard title="Indeterminate">

  <Checkbox indeterminate checked label="Label" />

</StyleguideCard>

<StyleguideCard title="Disabled">

  <Checkbox disabled label="Label" />
  <br>
  <Checkbox disabled checked label="Label" />

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />
