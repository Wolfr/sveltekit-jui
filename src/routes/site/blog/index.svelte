<script>
  import Button from '$lib/Button.svelte';
  import BlogArticle from '$lib/BlogArticle.svelte';

</script>

<div class="o-container o-container--medium">

  <div class="o-container-vertical">
    <BlogArticle
      slug="post-1"
      title="My title"
      date="April 5, 2021 10:31"
      content="
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</li>
          <li>In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <img src='placeholder.png' />
        "
    />
  </div>

  <div class="o-container-vertical">
    <BlogArticle
      slug="post-2"
      title="My title"
      date="April 5, 2021 10:31"
      content="
      <img src='placeholder.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        "
    />
  </div>
  
  <div class="o-container-vertical">
    <Button disabled>Previous page</Button>
    <Button>Next page</Button>
  </div>

</div>