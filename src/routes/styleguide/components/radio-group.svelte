<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Radio group';

  import RadioGroup from '$lib/RadioGroup.svelte';

  let optionSet1 = [
    {
        name:'Option 1',
        disabled: false,
        checked: true
    },
    {
        name:'Option 2',
        disabled: false,
    },
    {
        name:'Option 3',
        disabled: false,
    },
  ]

  let optionSet2 = [
    {
        name:'Option 1',
        disabled: false,
        checked: true
    },
    {
        name:'Option 2',
        disabled: false,
    },
    {
        name:'Option 3',
        disabled: false,
    },
    {
        name:'Disabled option',
        disabled: true,
    },
  ]

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <RadioGroup options={optionSet1} uuid="suh12" />
</StyleguideCard>

<StyleguideCard title="Radio group (inline)">
  <RadioGroup options={optionSet2}  inline uuid="suh2" />
</StyleguideCard>
