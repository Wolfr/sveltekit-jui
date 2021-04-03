<script>
  import Alert from '$lib/Alert.svelte';
  import Badge from '$lib/Badge.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Input from '$lib/Input.svelte';
  import Pagination from '$lib/Pagination.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import TodoItem from '$lib/TodoItem.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
</script>

<div class="o-container">
  <div class="o-container-vertical">

    <table class="c-table c-table--styled c-table--bordered" style="margin: 0 0 2rem;">
      <thead>
        <tr>
          <th>List name</th>
          <th>Last modified</th>
          <th>Tags</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each {length: 10} as elem, i}
        <tr>
          <td><a href="/modules/todos/detail">List {i+1}</a></td>
          <td>Apr 3 2021 10:34</td>
          <td>
            <Badge skin="success">Badge label</Badge>
            <Badge skin="error">Badge label</Badge>
          </td>
          <td class="c-table__actions"><Button href="/modules/todos/detail" layout="icon" icon="chevron-right">Detail page</Button>
        </tr>
        {/each}
        
      </tbody>
    </table>
    
    <Pagination />

  </div>
</div>