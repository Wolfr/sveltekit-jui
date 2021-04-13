<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Button Toolbar';
  
  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';

  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let propsTable = [
    {
      name: 'compact',
      description: 'Moves the buttons into one another.',
      required: false
    },
    {
      name: 'vertical',
      description: 'Vertical layout.',
      required: false
    }
  ]
  
</script>


<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Button toolbar" code="&lt;ButtonToolbar&gt;
  &lt;Button&gt;A button&lt;/Button&gt;
  &lt;Button&gt;A button&lt;/Button&gt;
&lt;/ButtonToolbar&gt;">
  <ButtonToolbar>
    <Button>A button</Button>
    <Button>A button</Button>
  </ButtonToolbar>
</StyleguideCard>

<StyleguideCard title="Compact">
  <ButtonToolbar compact>
    <Button>A button</Button>
    <Button>A button</Button>
    <Button>A button</Button>
  </ButtonToolbar>
</StyleguideCard>

<StyleguideCard title="Vertical + Compact">
  <ButtonToolbar vertical compact>
    <Button icon="add" layout="icon">A button</Button>
    <Button icon="add" layout="icon">A button</Button>
    <Button icon="add" layout="icon">A button</Button>
  </ButtonToolbar>
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />