<script>
  import Icon from '$lib/Icon.svelte';
  
</script>

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
  </tbody>
</table>
