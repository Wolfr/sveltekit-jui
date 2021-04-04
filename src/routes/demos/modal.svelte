<script>

  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';
  
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

</script>

<div class="u-spacer-l">

  <div class="container">

  <h2 class="c-h2">Modal demo here.</h2>

  </div>

</div>


<div class="c-modal-backdrop c-modal-backdrop--visible" style="position:absolute;z-index:0;"></div>
<div class="c-modal c-modal--medium" role="dialog" aria-labelledby="modalTitle-01">
  <div class="c-modal__push"></div>
  <div class="c-modal__header c-modal__header--bordered">
    <Toolbar>
      <ToolbarGroup position="left">
        <ToolbarItem>
          <ToolbarTitle>Modal window</ToolbarTitle>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup position="right">
        <ToolbarItem>
          <Button icon="close" variant="borderless" layout="icon">Cancel</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </div>
  <div class="c-modal__body">
    <div class="u-spacer-l">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </div>
  <div class="c-modal__footer c-modal__footer--bordered">
    <Toolbar>
      <ToolbarGroup position="right">
        <ToolbarItem>
          <ButtonToolbar>
            <Button>Cancel</Button>
            <Button variant="primary">Save</Button>
          </ButtonToolbar>
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  </div>
  <div class="c-modal__push"></div>
</div>