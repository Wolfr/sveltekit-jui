<script>

  import Icon from '$lib/jui-components/Icon.svelte';

  import Button from '$lib/jui-components/Button.svelte';
  import ButtonToolbar from '$lib/jui-components/ButtonToolbar.svelte';

  import Checkbox from '$lib/jui-components/Checkbox.svelte';

  import Navbar from '$lib/jui-components/Navbar.svelte';
  
  import Toolbar from '$lib/jui-components/Toolbar.svelte';
  import ToolbarGroup from '$lib/jui-components/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/jui-components/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/jui-components/ToolbarTitle.svelte';

  import FormGroupLayout from '$lib/jui-components/FormGroupLayout.svelte';
  
  import List from '$lib/jui-components/List.svelte';
  import ListItem from '$lib/jui-components/ListItem.svelte';
  
  // Form controls
  import Input from '$lib/jui-components/Input.svelte';
  import Slider from '$lib/jui-components/Slider.svelte';
  import SelectMenu from '$lib/jui-components/SelectMenu.svelte';
  import Toggle from '$lib/jui-components/Toggle.svelte';

</script>

<!-- You have found a work-in-progress part of JUI -->
<svelte:head>
  <title>Mobile app - Demos - JUI</title>
</svelte:head>

<div style="height: 100%; flex-direction: column;;">

  <Navbar>
    <Toolbar>
      
    </Toolbar>
  </Navbar>

  <main style="flex-grow: 1; height: calc(100% - 11.2rem);">
    <List>
      <ListItem><span slot="first-line">...</span></ListItem>
      <ListItem><span slot="first-line">...</span></ListItem>
      <ListItem><span slot="first-line">...</span></ListItem>
    </List>

  </main>

  <Navbar borderPosition="top">
    <Toolbar>
      <ToolbarGroup align="left">
        <ToolbarItem>
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </Navbar>

</div>

