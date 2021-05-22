<script>

  export let size = "medium";
  export let title = "Modal window";
  export let headerless;

  import Button from '$lib/jui-components/Button.svelte';
  import ButtonToolbar from '$lib/jui-components/ButtonToolbar.svelte';

  import Toolbar from '$lib/jui-components/Toolbar.svelte';
  import ToolbarGroup from '$lib/jui-components/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/jui-components/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/jui-components/ToolbarTitle.svelte';

	import { clickOutside } from '$lib/jui-components/clickOutside.js';
  import { modals } from '$lib/jui-components/modals.js';

  // Trap focus
  import { trapFocus } from "$lib/jui-components/trapFocus";

  function switchModalVisibility() {
    $modals[0].modalShow = !$modals[0].modalShow;
  }

  function handleClickOutside(event) {
    switchModalVisibility();
  }

  function handleCancelClick() {
    switchModalVisibility();
  }

  function handleCloseClick() {
    switchModalVisibility();
  }

  let trigger = 'Escape';

  function handleKeydown(e) {
    if (e.key == trigger) {
      switchModalVisibility();
    }
  }

</script>

<svelte:window on:keydown={handleKeydown}/>

<div
  class="c-modal c-modal--{size}"
  use:trapFocus
  role="dialog"
  use:clickOutside
  on:click_outside={handleClickOutside}
>
  <div class="c-modal__push"></div>
  {#if !headerless}
  <div class="c-modal__header c-modal__header--bordered">
    <Toolbar>
      <ToolbarGroup align="left">
        <ToolbarItem>
          <ToolbarTitle>{title}</ToolbarTitle>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup align="right">
        <ToolbarItem>
          <Button icon="close" skin="borderless" layout="icon" on:click={handleCloseClick}>Close</Button>
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
            <Button on:click={handleCancelClick}>Cancel</Button>
            <Button skin="primary">Save</Button>
          </ButtonToolbar>
        </div>
      </div>
    </div>
  </div>
  <div class="c-modal__push"></div>
</div>
