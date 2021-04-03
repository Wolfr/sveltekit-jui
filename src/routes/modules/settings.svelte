<script>
	  import Panel from '$lib/Panel.svelte';
    import PanelHeader from '$lib/PanelHeader.svelte';
    import PanelBody from '$lib/PanelBody.svelte';

    import FormGroupLayout from '$lib/FormGroupLayout.svelte';
    import FormGroup from '$lib/FormGroup.svelte';

    import SideMenu from '$lib/SideMenu.svelte';
    import SideMenuItem from '$lib/SideMenuItem.svelte';

</script>



<div style="display: flex; height: calc( 100% - 5.6rem);">
  <div style="padding: 2.4rem; border-right: 1px solid #C3C9D6;">
    <SideMenu>
        <SideMenuItem href="/">Nav item 1</SideMenuItem>
        <SideMenuItem href="/">Nav item 2</SideMenuItem>
        <SideMenuItem href="/">Nav item 3</SideMenuItem>
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
                </FormGroupLayout>
            </PanelBody>
            <PanelBody>
              <p>I am the 2nd panel body.</p>
            </PanelBody>
        </Panel>
    </div>
  </div>
</div>