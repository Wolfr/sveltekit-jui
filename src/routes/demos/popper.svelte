<script>
  import Button from '$lib/jui-components/Button.svelte';
  import Alert from '$lib/jui-components/Alert.svelte';
  import Icon from '$lib/jui-components/Icon.svelte';
  
  import SelectMenu from '$lib/jui-components/SelectMenu.svelte';
  import SelectMenuItem from '$lib/jui-components/SelectMenuItem.svelte';
  
  
  import PopoverContainer from '$lib/jui-components/PopoverContainer.svelte';
  import Popover from '$lib/jui-components/Popover.svelte';

  
  import NavMenu from '$lib/jui-components/NavMenu.svelte';
  import NavMenuItem from '$lib/jui-components/NavMenuItem.svelte';
  import NavMenuDivider from '$lib/jui-components/NavMenuDivider.svelte';

</script>

<!-- You have found a work-in-progress part of JUI -->

<svelte:head>
  <title>Popover and tooltip - Demos - JUI</title>
</svelte:head>

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
