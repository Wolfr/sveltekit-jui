<script>
  import Button from '$lib/Button.svelte';
  import BlogArticle from '$lib/BlogArticle.svelte';
  
  import Nav from '$lib/Nav.svelte';
  import NavItem from '$lib/NavItem.svelte';

</script>

<div style="overflow: scroll; height: 100%;">

  <div class="u-spacer-l">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <h1 class="c-h3">My Blog</h1>
  
      <Nav>
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
        <NavItem>Item 3</NavItem>
        <NavItem>Item 4</NavItem>
      </Nav>
    </div>
  </div>

  <div class="o-container o-container--medium">

    <div class="o-container-vertical">
      <BlogArticle title="My title" />
    </div>
    <div class="o-container-vertical">
      <BlogArticle title="My title" />
    </div>
    <div class="o-container-vertical">
      <BlogArticle title="My title" />
    </div>
    <div class="o-container-vertical">
      <BlogArticle title="My title" />
    </div>

    <Button>Previous page</Button>
    <Button>Next page</Button>

  </div>
</div>
