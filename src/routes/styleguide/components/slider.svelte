<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  import Slider from '$lib/jui-components/Slider.svelte';

  let pageTitle = 'Slider';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>


<StyleguideCard title={pageTitle}>

  <Slider />

</StyleguideCard>
