<script>

  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';
  
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';
  
  import Modal from '$lib/Modal.svelte';
  import { modals } from '$lib/modals.js';

  function activateModal() {
    $modals[0].modalShow = !$modals[0].modalShow;
  }

</script>


<div class="u-spacer-l">

    <div class="container">

    <h2 class="c-h2">Modal demo here.</h2>

    <Button on:click={activateModal}>Activate modal</Button>
  </div>
</div>

{#if $modals[0].modalShow}
<div class="c-modal-context c-modal-context--visible">
  <div class="c-modal-backdrop c-modal-backdrop--visible"></div>

  <Modal title="Modal demo">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </Modal>

</div>
{/if}