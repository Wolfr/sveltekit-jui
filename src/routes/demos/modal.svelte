<script>

  import Alert from '$lib/jui-components/Alert.svelte';
  
  import Button from '$lib/jui-components/Button.svelte';
  import ButtonToolbar from '$lib/jui-components/ButtonToolbar.svelte';
  
  import Toolbar from '$lib/jui-components/Toolbar.svelte';
  import ToolbarGroup from '$lib/jui-components/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/jui-components/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/jui-components/ToolbarTitle.svelte';

  import FormGroupLayout from '$lib/jui-components/FormGroupLayout.svelte';
  import FormGroup from '$lib/jui-components/FormGroup.svelte';
  import Input from '$lib/jui-components/Input.svelte';

  
  import Modal from '$lib/jui-components/Modal.svelte';
  import { modals } from '$lib/jui-components/modals.js';

  function activateModal() {
    $modals[0].modalShow = !$modals[0].modalShow;
  }

</script>

<svelte:head>
    <title>Modal - Demos - JUI</title>
</svelte:head>

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
    <div class="u-spacer-bottom">
      <Alert>Notice how focus is trapped within the modal.</Alert>
    </div>
    <FormGroupLayout>
      <FormGroup label="Name" id="nameId" type="text" />
      <FormGroup label="E-mail address" id="emailId" type="email" />
      <div class="o-form-group">
        <label class="o-form-group__label" for="messageId">Message</label>
        <div class="o-form-group__controls">
          <textarea class="c-input c-input--h-large" id="messageId" />
        </div>
      </div>
    </FormGroupLayout>
  </Modal>

</div>
{/if}