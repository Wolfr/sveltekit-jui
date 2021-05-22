<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  import ColorPicker from '$lib/jui-components/ColorPicker.svelte';

  let pageTitle = 'Color picker';

</script>


<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>


<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Regular ">
	<ColorPicker value="#5E7CBC" />
</StyleguideCard>
