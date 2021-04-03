<script>
  import Badge from '$lib/Badge.svelte';
  import Card from '$lib/Card.svelte';
  import Button from '$lib/Button.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';
</script>

<Navbar>
  <Toolbar>
    <ToolbarGroup position="left">
      <ToolbarItem>
        <ToolbarTitle>Styleguide</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<div class="o-container">
  <div class="o-container-vertical">

    <h3 class="c-h3">Button</h3>
    <Card cssClass="u-spacer-mb">
      <Button>A button</Button>
      <Button variant="primary">A button</Button>
      <Button icon="add">A button</Button>
      <Button icon="add" layout="icon">A button</Button>
      <Button icon="chevron-right" layout="label-icon">A button</Button>
    </Card>

    <h3 class="c-h3">Badge</h3>
    <Card cssClass="u-spacer-mb">
      <Badge>A button</Badge>
      <Badge skin="success">A button</Badge>
      <Badge skin="error">A button</Badge>
    </Card>
    
    <h3 class="c-h3">Toolbar</h3>
    <Card cssClass="u-spacer-mb">
      <p>...</p>
    </Card>

  </div>
</div>