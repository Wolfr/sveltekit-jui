<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Radio group';
  
  import RadioGroup from '$lib/RadioGroup.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} />

</StyleguideCard>

<StyleguideCard title="Radio group (inline)">

  <RadioGroup options={['Option 1', 'Option 2', 'Option 3']}  inline />

</StyleguideCard>
