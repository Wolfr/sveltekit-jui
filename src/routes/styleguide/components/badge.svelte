<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  let pageTitle = 'Badge';
  
  import Badge from '$lib/Badge.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <Badge>Default</Badge>
  <Badge skin="success">Success</Badge>
  <Badge skin="warning">Warning</Badge>
  <Badge skin="danger">Danger</Badge>
</StyleguideCard>
