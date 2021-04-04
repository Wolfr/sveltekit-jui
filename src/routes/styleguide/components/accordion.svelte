<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import StyleguidePropsTable from '$lib/StyleguidePropsTable.svelte';

  let pageTitle = 'Accordion';
  import Accordion from '$lib/Accordion.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Accordion />
</StyleguideCard>