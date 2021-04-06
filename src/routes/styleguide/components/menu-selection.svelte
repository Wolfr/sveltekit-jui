<script>

  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  import SelectMenu from '$lib/SelectMenu.svelte';

  let pageTitle = 'Menu (Selection)';

  let optionSet1 = [
    {
        name:'Option 1'
    },
    {
        name:'Option 2',
    },
    {
        name:'Option 3',
    },
    {
        name:'Better option 1',
    },
    {
        name:'Better option 2',
    },
    {
        name:'Better option 3',
    },
  ]

  let propsTable = [
    {
      name: 'sameWidth',
      description: 'Makes menu same width as parent.',
      options: [
        {
          name: 'true/false',
          default: false
        }
      ],
      required: false
    },
    {
      name: 'options',
      description: 'Object with available options.',
      options: [
        {
          name: `[{name: 'Option 1'},{name: 'Option 2'}]`,
          default: false
        }
      ],
      required: false
    }
    
  ]

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Select menu (native)">

  <div class="c-select-holder">
    <select class="c-select">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3</option>
    </select>
  </div>

</StyleguideCard>

<StyleguideCard title="Select menu (custom)" description="<p>Single selection.</p>" style="height: 40rem;">

  <SelectMenu options={optionSet1} sameWidth=0 />

</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />