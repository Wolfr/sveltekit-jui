<script>
  import StyleguideIntro from '$lib/jui-components/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/jui-components/StyleguideCard.svelte';
  let pageTitle = 'Table';

  import NavMenu from '$lib/jui-components/NavMenu.svelte';
  import NavMenuItem from '$lib/jui-components/NavMenuItem.svelte';
  import NavMenuDivider from '$lib/jui-components/NavMenuDivider.svelte';
  
  import Checkbox from '$lib/jui-components/Checkbox.svelte';

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
      {#each {length: 3} as elem}
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
      {/each}
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
      {#each {length: 3} as elem}
      <tr>
        <td>Data point</td>
        <td>Data point</td>
        <td>Data point</td>
      </tr>
      {/each}
    </tbody>
  </table>

</StyleguideCard>

<StyleguideCard title="Table actions">

  <table class="c-table c-table--styled c-table--bordered">
    <thead>
      <tr>
        <th>Data</th>
        <th>Data</th>
        <th>Data</th>
        <th class="c-table-cell c-table-cell--minimize-width">
          <!-- Actions-->
        </th>
      </tr>
    </thead>
    <tbody>
      {#each {length: 3} as elem}
      <tr>
        <td>Data</td>
        <td>Data</td>
        <td>Data</td>
        <td class="c-table-cell c-table-cell--minimize-width c-table-cell--no-padding-sides">
          <div class="c-table-cell__inner c-table-cell__inner--float-right">
            <NavMenu type="icon" sameWidth=0>
              <NavMenuItem icon="eye" href="/">View</NavMenuItem>
              <NavMenuItem icon="edit" href="/">Edit</NavMenuItem>
              <NavMenuItem icon="delete" href="/">Delete</NavMenuItem>
            </NavMenu>
          </div>
        </td>
      </tr>
      {/each}
    </tbody>
  </table>

</StyleguideCard>


<StyleguideCard title="Table actions">

  <table class="c-table c-table--styled c-table--bordered">
    <thead>
      <tr>
        <th class="c-table-cell c-table-cell--checkbox">
          <Checkbox hideLabel />
        </th>
        <th>Data</th>
        <th>Data</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      {#each {length: 3} as elem}
        <tr>
          <td class="c-table-cell c-table-cell--checkbox">
            <Checkbox hideLabel />
          </td>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
        </tr>
      {/each}
    </tbody>
  </table>

</StyleguideCard>