<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  import BarChart from '$lib/jui-components/BarChart.svelte';

  let pageTitle = 'Bar chart';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Bar chart">
  <BarChart />
</StyleguideCard>
