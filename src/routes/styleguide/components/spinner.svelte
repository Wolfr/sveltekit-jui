<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Spinner';
  
  import Spinner from '$lib/Spinner.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <Spinner />

</StyleguideCard>
