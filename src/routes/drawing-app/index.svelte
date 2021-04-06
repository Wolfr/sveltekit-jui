<script>

  import Globe from './MyGlobe.svelte';
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
  
  // Form controls
  import Input from '$lib/Input.svelte';
  import Slider from '$lib/Slider.svelte';
  import SelectMenu from '$lib/SelectMenu.svelte';
  import Toggle from '$lib/Toggle.svelte';

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

<div style="height: 100%; flex-direction: column;;">

  <Navbar>
    <Toolbar>
      <ToolbarGroup position="left">
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
      <ToolbarGroup position="left">
        <ToolbarItem>
          <Button layout="icon" skin="borderless" icon="add" />
          <Button layout="icon" skin="borderless" icon="add" />
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </Navbar>

</div>

