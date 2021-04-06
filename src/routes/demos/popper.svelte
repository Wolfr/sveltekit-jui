<script>
  import Button from '$lib/Button.svelte';
  import Alert from '$lib/Alert.svelte';
  import Icon from '$lib/Icon.svelte';
  
  import SelectMenu from '$lib/SelectMenu.svelte';
  import SelectMenuItem from '$lib/SelectMenuItem.svelte';
  
  
  import PopoverContainer from '$lib/PopoverContainer.svelte';
  import Popover from '$lib/Popover.svelte';

  
  import NavMenu from '$lib/NavMenu.svelte';
  import NavMenuItem from '$lib/NavMenuItem.svelte';
  import NavMenuDivider from '$lib/NavMenuDivider.svelte';

</script>

<div class="u-spacer-l">

  <div class="container">

    <h2 class="c-h2">Popover & tooltip demo here.</h2>

    <h3 class="c-h3">Tooltip</h3>

    <div class="c-content">
      <p>Hover this button to show a tooltip.</p>
      <p><Button>Show a tooltip</Button></p>

    </div>

    <h3 class="c-h3">Generic popups</h3>

    <div class="c-content">
      <p>Click this button to show a generic popover:</p>
      <p>
        <PopoverContainer>
          <Button icon="circle-information">Show a popup</Button>
          <Popover>Hey. I am not automatically positioned yet.</Popover>
        </PopoverContainer>
      </p>

    </div>

    <h3 class="c-h3">Select popups</h3>

    <SelectMenu sameWidth="false" options={[{name: "Option 1"},{name: "Option 2"}]}/>

    <NavMenu>
      <NavMenuItem href="/">Navigation item 1</NavMenuItem>
      <NavMenuItem href="/">Navigation item 2</NavMenuItem>
      <NavMenuItem href="/">Navigation item 3</NavMenuItem>
      <NavMenuDivider />
      <NavMenuItem destructive href="/">Destructive action</NavMenuItem>
    </NavMenu>


  </div>

</div>
