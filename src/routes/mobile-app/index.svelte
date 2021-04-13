<script>

  import Icon from '$lib/Icon.svelte';

  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';

  import Checkbox from '$lib/Checkbox.svelte';

  import Navbar from '$lib/Navbar.svelte';
  
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  
  import List from '$lib/List.svelte';
  import ListItem from '$lib/ListItem.svelte';
  
  // Form controls
  import Input from '$lib/Input.svelte';
  import Slider from '$lib/Slider.svelte';
  import SelectMenu from '$lib/SelectMenu.svelte';
  import Toggle from '$lib/Toggle.svelte';

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

