<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Checkbox';
  
  import Checkbox from '$lib/Checkbox.svelte';

</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>

  <Checkbox checked label="Label" />

</StyleguideCard>

<StyleguideCard title="Indeterminate">

  <Checkbox indeterminate checked label="Label" />

</StyleguideCard>

<StyleguideCard title="Disabled">

  <Checkbox disabled label="Label" />
  <br>
  <Checkbox disabled checked label="Label" />

</StyleguideCard>


