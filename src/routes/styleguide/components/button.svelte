<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Button';
  
  import Button from '$lib/Button.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Button>A button</Button>
  <Button variant="primary">A button</Button>
  <Button icon="add">A button</Button>
  <Button icon="add" layout="icon">A button</Button>
  <Button icon="chevron-right" layout="label-icon">A button</Button>
</StyleguideCard>
