<script>

  import Globe from './MyGlobe.svelte';
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
  
  // Form controls
  import Input from '$lib/jui-components/Input.svelte';
  import Slider from '$lib/jui-components/Slider.svelte';
  import SelectMenu from '$lib/jui-components/SelectMenu.svelte';
  import Toggle from '$lib/jui-components/Toggle.svelte';

  let optionSet1 = [
    {
        name:'Option 1'
    },
    {
        name:'Option 2',
    },
    {
        name:'Option 3',
    },
  ]
  
</script>

<!-- You have found a work-in-progress part of JUI -->
<svelte:head>
  <title>Creative app - Demos - JUI</title>
</svelte:head>

<div style="height: 100%; flex-direction: column;;">

  <Navbar>
    <Toolbar>
      <ToolbarGroup align="left">
        <ToolbarItem>
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="board" />
          <Button layout="icon" skin="borderless" icon="repeat" />
        </ToolbarItem>
        <ToolbarItem>
          <p class="u-text-muted">|</p>
        </ToolbarItem>
        <ToolbarItem>
          <Button layout="icon" skin="borderless" icon="search" />
          <Button layout="icon" skin="borderless" icon="options-vertical" />
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
        
        
        <FormGroupLayout>
          <div class="o-form-group">
            <label class="o-form-group__label" for="fieldId">Dots amount</label>
            <div class="o-form-group__controls">
              <Slider />
            </div>
          </div>
          
          <div class="o-form-group">
            <label class="o-form-group__label" for="fieldId">Animate</label>
            <div class="o-form-group__controls">
              <Toggle />
            </div>
          </div>
        
          <div class="o-form-group">
            <label class="o-form-group__label" for="fieldId">Field</label>
            <div class="o-form-group__controls">
              <input class="c-input" id="fieldId" type="text" />
            </div>
          </div>

          <div class="o-form-group">
            <label class="o-form-group__label" for="fieldId">Field</label>
            <div class="o-form-group__controls">
              <SelectMenu cssClass="c-custom-select--fullwidth" options={optionSet1} />
            </div>
          </div>

          <div class="o-form-group">
            <label class="o-form-group__label">Add-ons</label>
            <Checkbox label="Analog" /> 
            <Checkbox label="Synthetic" /> 
            <Checkbox label="A+" /> 
          </div>

        </FormGroupLayout>
        
      </div>
    </div>
  </div>

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

