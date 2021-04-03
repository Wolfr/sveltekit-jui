<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Button';
  
  import Button from '$lib/Button.svelte';
</script>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title="Button layouts">
  <Button>A button</Button>
  <Button variant="primary">A button</Button>
  <Button icon="add">A button</Button>
  <Button icon="add" layout="icon">A button</Button>
  <Button icon="chevron-right" layout="label-icon">A button</Button>
</StyleguideCard>

<StyleguideCard
  title="Button skins"
  code="&lt;Button&gt;Secondary button&lt;/Button&gt;
&lt;Button variant=&quot;primary&quot;&gt;Primary button&lt;/Button&gt;
&lt;Button variant=&quot;borderless&quot;&gt;Borderless button&lt;/Button&gt;"
>
  <Button>Secondary button</Button>
  <Button variant="primary">Primary button</Button>
  <Button variant="borderless">Borderless button</Button>
</StyleguideCard>


<table class="c-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Variant</td>
      <td>...</td>
    </tr>
  </tbody>
</table>