<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  import Toggle from '$lib/jui-components/Toggle.svelte';

  let pageTitle = 'Toggle';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Toggle />
</StyleguideCard>
