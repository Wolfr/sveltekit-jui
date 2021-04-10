<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Card';
  
  import Card from '$lib/Card.svelte';
  import Button from '$lib/Button.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Default">
  <Card>
    <h3>I am a card title</h3>
    <p class="u-m-0">Card content here.</p>
  </Card>
</StyleguideCard>

<StyleguideCard title="Interactive">
  <Card href="/">
    <h3>I am a card title</h3>
    <p class="u-m-0">Card content here.</p>
  </Card>
</StyleguideCard>

<StyleguideCard title="With button">
  <Card>
    <h3>I am a card title</h3>
    <p>Card content here.</p>
    <Button>Button title</Button>
  </Card>
</StyleguideCard>

