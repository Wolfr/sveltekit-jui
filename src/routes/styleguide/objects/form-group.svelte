<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Form Group';

  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  import FormGroup from '$lib/FormGroup.svelte';

  import Input from '$lib/Input.svelte';
  import Button from '$lib/Button.svelte';

</script>

<svelte:head>
  <title>{pageTitle} - Objects - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard
  title="Form Group Layout (Standard)"
  description="<p>The standard way to do form layout, with top aligned labels.</p>"
>
  <FormGroupLayout>
    <FormGroup label="Name 1" type="text" />
    <FormGroup label="Name 2" type="text" />
    <FormGroup label="Name 3" type="text" />
  </FormGroupLayout>
</StyleguideCard>


<StyleguideCard
  title="Form Group Layout (Left aligned)"
  description="<p>Another way to do form layout, with left aligned labels.</p>"
>
  <FormGroupLayout layoutType="horizontal">
    <FormGroup label="Name 1" type="text" />
    <FormGroup label="Name 2" type="text" />
    <FormGroup label="Name 3" type="text" />
  </FormGroupLayout>
</StyleguideCard>

<StyleguideCard title="Form Group Inline">
  <FormGroupLayout layoutType="inline">
    <FormGroup cssClass="o-form-group--inline-grow" layoutType="inline">
      <Input type="text" />
    </FormGroup>
    <FormGroup cssClass="o-form-group--inline-shrink" layoutType="inline">
      <Button icon="add">Add item</Button>
    </FormGroup>
  </FormGroupLayout>
</StyleguideCard>
