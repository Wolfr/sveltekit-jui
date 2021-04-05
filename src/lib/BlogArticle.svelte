<script>
  export let title;
  import RichContent from '$lib/RichContent.svelte';
</script>


<article>
  <header>
    <h2 class="c-h2">My title.</h2>
    <p>Date</p>
  </header>

  <RichContent>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ul>
      <li>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</li>
      <li>In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
    </ul>
    <img src="http://placehold.it/1200x900" />
  </RichContent>

</article>