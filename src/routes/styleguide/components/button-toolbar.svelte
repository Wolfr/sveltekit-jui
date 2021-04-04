<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Button Toolbar';
  
  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';

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

<StyleguideCard title="Button toolbar (compact)" code="&lt;ButtonToolbar compact&gt;
  &lt;Button&gt;A button&lt;/Button&gt;
  &lt;Button&gt;A button&lt;/Button&gt;
&lt;/ButtonToolbar&gt;">
  <ButtonToolbar compact>
    <Button>A button</Button>
    <Button>A button</Button>
  </ButtonToolbar>
</StyleguideCard>
