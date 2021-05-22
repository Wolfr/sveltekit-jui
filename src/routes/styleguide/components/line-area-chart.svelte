<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  import LineAreaChart from '$lib/jui-components/LineAreaChart.svelte';

  let pageTitle = 'Line/area chart';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Line/area chart">
  <LineAreaChart />
</StyleguideCard>
