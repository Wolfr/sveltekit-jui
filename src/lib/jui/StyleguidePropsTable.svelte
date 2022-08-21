<script>
  export let propsTable;

  import Alert from '$lib/Alert.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

</script>

<Toolbar spaced={false}>
  <ToolbarGroup align="left">
    <ToolbarItem>
      <h3 class="c-h3">Props</h3>
    </ToolbarItem>
  </ToolbarGroup>
  {#if propsTable}
    <ToolbarGroup align="right">
      <ToolbarItem>
        <p class="u-text-muted">* denotes a required prop. Overlined text denotes the default value.</p>
      </ToolbarItem>
    </ToolbarGroup>
  {/if}
</Toolbar>

{#if propsTable}
  <table class="c-table c-table--styled c-table--bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Options/values</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each propsTable as prop}
        <tr>
          <td><code class="c-code">{prop.name}</code>{#if prop.required}*{/if}</td>
          <td>
            {#if prop.type == "boolean"}Boolean{/if}
            {#if prop.defaultValue}
              Default value: {prop.defaultValue}
            {/if}
            {#if prop.options}
              {#each prop.options as option, index}
                  {#if option.default}
                    <span class="c-props-table-default"><code class="c-code">{option.name}</code></span>
                  {:else}
                    <code class="c-code">{option.name}</code>
                  {/if}
                  {#if index != prop.options.length - 1 },&nbsp;{/if}
              {/each}
            {/if}
          </td>
          <td>
            {#if prop.description}{prop.description}{:else}<span class="u-text-muted">-</span>{/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <Alert>No props.</Alert>
{/if}
<style lang="scss">

  :global(.c-props-table-default code) {
    text-decoration: overline;
  }

</style>