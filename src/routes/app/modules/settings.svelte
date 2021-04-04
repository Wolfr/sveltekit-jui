<script>
	  import Panel from '$lib/Panel.svelte';
    import PanelHeader from '$lib/PanelHeader.svelte';
    import PanelBody from '$lib/PanelBody.svelte';

    import FormGroupLayout from '$lib/FormGroupLayout.svelte';
    import FormGroup from '$lib/FormGroup.svelte';

    import SideMenu from '$lib/SideMenu.svelte';
    import SideMenuItem from '$lib/SideMenuItem.svelte';
    
    import Checkbox from '$lib/Checkbox.svelte';

</script>

<div style="display: flex; height: calc( 100% - 5.6rem);">
  <div style="padding: 2.4rem 0; min-width: 24rem; border-right: 1px solid #CED3DE;">
    <SideMenu>
        <SideMenuItem href="/">Setting 1</SideMenuItem>
        <SideMenuItem href="/">Setting 2</SideMenuItem>
        <SideMenuItem href="/">Setting 3</SideMenuItem>
    </SideMenu>
  </div>
  <div class="o-scroll-wrapper" style="flex-grow: 1;">
    <div class="o-scroll-wrapper__body" style="padding: 2.4rem;">
        <Panel minimal>
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
                </FormGroupLayout>
            </PanelBody>
            <PanelBody>
              <p>I am the 2nd panel body.</p>
            </PanelBody>
        </Panel>
    </div>
  </div>
</div>