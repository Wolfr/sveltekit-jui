<script>
	  import Panel from '$lib/jui-components/Panel.svelte';
    import PanelHeader from '$lib/jui-components/PanelHeader.svelte';
    import PanelBody from '$lib/jui-components/PanelBody.svelte';

    import FormGroupLayout from '$lib/jui-components/FormGroupLayout.svelte';
    import FormGroup from '$lib/jui-components/FormGroup.svelte';

    import SideMenu from '$lib/jui-components/SideMenu.svelte';
    import SideMenuItem from '$lib/jui-components/SideMenuItem.svelte';

    import Checkbox from '$lib/jui-components/Checkbox.svelte';
    import Radio from '$lib/jui-components/Radio.svelte';
    import RadioGroup from '$lib/jui-components/RadioGroup.svelte';
    
    let radioOptions = [{ name: 'EU'}, { name: 'Outside EU'}];

</script>

<div class="c-settings-layout">
  <div class="c-settings-layout__sidebar">
    <SideMenu>
        <SideMenuItem href="/">Setting 1</SideMenuItem>
        <SideMenuItem href="/">Setting 2</SideMenuItem>
        <SideMenuItem href="/">Setting 3</SideMenuItem>
    </SideMenu>
  </div>
  <div class="o-scroll-wrapper" style="flex-grow: 1;">
    <div class="o-scroll-wrapper__body" style="padding: 2.4rem;">
        <Panel>
          <PanelHeader title="Setting name" />
            <PanelBody>
                <FormGroupLayout>
                  <FormGroup label="Name 1" id="nameId1" type="text" />
                  <FormGroup label="Name 2" id="nameId2" type="text" />
                  <FormGroup label="Name 3" id="nameId3" type="text" />

                  
                  <div class="o-form-group">
                    <label class="o-form-group__label">Favorite fruit</label>
                    <Checkbox label="Bananas" /> 
                    <Checkbox label="Grapes" /> 
                    <Checkbox label="Strawberries" /> 
                  </div>
                  
                  <div class="o-form-group">
                      <label class="o-form-group__label">Location</label>
                      <div class="o-form-group__controls">
                        <RadioGroup options={radioOptions} />
                      </div>
                  </div>
                </FormGroupLayout>
            </PanelBody>
            <PanelBody>
              <div class="o-form-group-layout o-form-group-layout--standard">
                  <div class="o-form-group">
                      <label class="o-form-group__label">Value</label>
                      <div class="o-form-group__controls">
                          <div class="c-radio-group c-radio-group--inline">
                              <div class="c-radio">
                                  <label>
                                      <input type="radio" name="radio12" />Inline Value 1
                                  </label>
                              </div>
                              <div class="c-radio">
                                  <label>
                                      <input type="radio" name="radio12" />Inline Value 2
                                  </label>
                              </div>
                              <div class="c-radio">
                                  <label>
                                      <input type="radio" name="radio12" checked="checked" />Inline Value 3
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </PanelBody>
        </Panel>
    </div>
  </div>
</div>