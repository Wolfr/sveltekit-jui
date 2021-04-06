<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'Table';

</script>

<svelte:head>
  <title>{pageTitle} - Components - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<StyleguideCard title={pageTitle}>
  <table class="c-table c-table--styled">
    <thead>
      <tr>
        <th>Data header</th>
        <th>Data header</th>
        <th>Data header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
    </tbody>
  </table>

</StyleguideCard>

<StyleguideCard title="Table striped">
  <table class="c-table c-table--styled c-table--striped">
    <thead>
      <tr>
        <th>Data header</th>
        <th>Data header</th>
        <th>Data header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
    </tbody>
  </table>

</StyleguideCard>
