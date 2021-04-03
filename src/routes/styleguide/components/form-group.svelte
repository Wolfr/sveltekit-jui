<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Form Group';

  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  import FormGroup from '$lib/FormGroup.svelte';

</script>

<StyleguideCard title={pageTitle}>

  <FormGroupLayout>
    <FormGroup label="Name 1" id="nameId1" type="text" />
    <FormGroup label="Name 2" id="nameId2" type="text" />
    <FormGroup label="Name 3" id="nameId3" type="text" />
  </FormGroupLayout>

</StyleguideCard>
