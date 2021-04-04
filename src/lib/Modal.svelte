<script>

  export let size;
  export let headerless;

  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';

  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

</script>

<div class="c-modal c-modal--{size}" role="dialog" aria-labelledby="modalTitle-02">
  <div class="c-modal__push"></div>
  {#if !headerless}
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
  {/if}
  
  <div class="c-modal__body">
      <slot></slot>
  </div>
  <div class="c-modal__footer { headerless ? '' : 'c-modal__footer--bordered' } ">
    <div class="c-toolbar c-toolbar--spaced">
      <div class="c-toolbar__right">
        <div class="c-toolbar__item">
          <ButtonToolbar>
            <Button>Cancel</Button>
            <Button variant="primary">Save</Button>
          </ButtonToolbar>
        </div>
      </div>
    </div>
  </div>
  <div class="c-modal__push"></div>
</div>
