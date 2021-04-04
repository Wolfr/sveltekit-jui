<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Radio button';
  
  import Radio from '$lib/Radio.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <Radio checked label="Label" />

</StyleguideCard>


<StyleguideCard title={pageTitle}>

  <Radio disabled label="Label" />

</StyleguideCard>
