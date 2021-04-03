<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Input';
  
  import Input from '$lib/Input.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Input />
</StyleguideCard>
