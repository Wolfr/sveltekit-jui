<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  let pageTitle = 'Badge';
  
  import Badge from '$lib/Badge.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Badge skins"
code="&lt;Badge&gt;Default&lt;/Badge&gt;
&lt;Badge skin=&quot;success&quot;&gt;Success&lt;/Badge&gt;
&lt;Badge skin=&quot;warning&quot;&gt;Warning&lt;/Badge&gt;
&lt;Badge skin=&quot;danger&quot;&gt;Danger&lt;/Badge&gt;">
  <Badge>Default</Badge>
  <Badge skin="success">Success</Badge>
  <Badge skin="warning">Warning</Badge>
  <Badge skin="danger">Danger</Badge>
</StyleguideCard>
