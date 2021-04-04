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
    }    
  ]
  
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Button group" code="&lt;ButtonToolbar&gt;
  &lt;Button&gt;A button&lt;/Button&gt;
  &lt;Button&gt;A button&lt;/Button&gt;
&lt;/ButtonToolbar&gt;">
  <ButtonToolbar>
    <Button>A button</Button>
    <Button>A button</Button>
  </ButtonToolbar>
</StyleguideCard>

<StyleguideCard>
  <ButtonToolbar compact>
    <Button icon="add">A button</Button>
    <Button icon="delete">A button</Button>
  </ButtonToolbar>
</StyleguideCard>

<StyleguideCard>
  <ButtonToolbar compact>
    <Button>A button</Button>
    <Button>A button</Button>
    <Button>A button</Button>
  </ButtonToolbar>
</StyleguideCard>

<StyleguidePropsTable propsTable={propsTable} />