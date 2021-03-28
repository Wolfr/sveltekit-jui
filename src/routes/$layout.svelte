<script>
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';
  import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar>
  <Toolbar>
    <ToolbarGroup position="left">
      <ToolbarItem>
        <ToolbarTitle>My todo lists</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup position="right">
      <ToolbarItem>
        <p>Sign out</p>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<slot></slot>

<style lang="scss" global>

  @import "https://unpkg.com/mono-icons@1.2.4/iconfont/icons.css";

  @import "../scss/s-colors";
  @import "../scss/s-semantic-colors";
  @import "../scss/s-variables";

  @import "../scss/reset";
  @import "../scss/e-base";

  @import "../scss/c-button";
  @import "../scss/c-button-skins";
  @import "../scss/c-card";
  @import "../scss/o-container";
  @import "../scss/o-container-vertical";
  @import "../scss/c-content";
  @import "../scss/c-toolbar";
  @import "../scss/c-navbar";
  @import "../scss/c-table";
  
  
  @import "../scss/u-display";
  @import "../scss/u-spacer";

  #svelte {
    width: 100%;
    height: 100%;
  }

</style>
