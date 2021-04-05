<script>
  import Button from '$lib/Button.svelte';
  import Alert from '$lib/Alert.svelte';
  
  import PopoverWrapper from '$lib/PopoverWrapper.svelte';
  import Popover from '$lib/Popover.svelte';
  
  import { popovers } from '$lib/popovers.js';

  function handlePopover() {
    $popovers[0].popoverShow = !$popovers[0].popoverShow
  }

  
</script>

<div class="u-spacer-l">

  <div class="container">

    <h2 class="c-h2">Popover & tooltip demo here.</h2>
    
    <div class="u-spacer-bottom">
      <Alert type="warning">Popover functions, but need to integrate Popper.js.</Alert>
    </div>

    <PopoverWrapper>
      <Button on:click={handlePopover}>Pop up a box</Button>
      <Popover>Hey</Popover>
    </PopoverWrapper>
    
    <br />

    <Button>Show a tooltip...</Button>

  </div>

</div>
