<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  import Button from '$lib/jui-components/Button.svelte';

  let pageTitle = 'Popover';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} content="Generic popover component (todo)."/>

<StyleguideCard title={pageTitle}>

  <Button>Click to show a popover</Button>

</StyleguideCard>
