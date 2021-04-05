<script>

  import Globe from './Globe.svelte';
  import Icon from '$lib/Icon.svelte';

  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';

  import Input from '$lib/Input.svelte';
  import Slider from '$lib/Slider.svelte';

  import Navbar from '$lib/Navbar.svelte';
  
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

</script>


<div style="height: 100%; flex-direction: column;;">

  <Navbar>
    <Toolbar>
      <ToolbarGroup position="left">
        <ToolbarItem>
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </Navbar>

  <div style="display: flex; height: calc(100% - 11.2rem)">
    <div style="background: #EEE; flex: 1 1 100%;">
      <div style="width: 100%; height: 100%; display: grid;">
        <div style="margin: auto;">
          <Globe DOTS_AMOUNT="5" />
        </div>
      </div>
    </div>
    <div style="background: #FFF; border-left: .1rem solid #DDD; flex: 0 0 30rem;">
      <div class="u-spacer-l">
        
        <Slider />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  </div>

  <Navbar borderPosition="top">
    <Toolbar>
      <ToolbarGroup position="left">
        <ToolbarItem>
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </Navbar>

</div>

