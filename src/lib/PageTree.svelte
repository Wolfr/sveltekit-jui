<script>

  let windowInnerWidth;
  
  import { pageIndexVisibility } from '$lib/page-index.js';

  function toggleVisibilityIfMobile() {
    if (windowInnerWidth < 768) {
        $pageIndexVisibility[0].pageIndexVisible = false
    }
  }

</script>

<svelte:window bind:innerWidth={windowInnerWidth} />

<ul class="c-bordered-list c-bordered-list--small">
  <li>
    <a href="/styleguide/" on:click={toggleVisibilityIfMobile}>Style guide</a>
  </li>
  <li>
      <span>Website</span>
      <ul>
        <li><a href="/site/" on:click={toggleVisibilityIfMobile}>Media example</a></li>
        <li><a href="/site/blog" on:click={toggleVisibilityIfMobile}>Blog list</a></li>
      </ul>
  </li>
  <li>
    <span>App</span>
    <ul>
      <li><a href="/app/" on:click={toggleVisibilityIfMobile}>Sign in</a></li>
      <li><a href="/app/forgot-password" on:click={toggleVisibilityIfMobile}>Forgot password</a></li>
      <li>
        <a href="/app/modules/todos" on:click={toggleVisibilityIfMobile}>Todos</a>
        <ul>
          <li><a href="/app/modules/todos/detail" on:click={toggleVisibilityIfMobile}>Detail</a></li>
        </ul>
      </li>
      <li><a href="/app/modules/stats" on:click={toggleVisibilityIfMobile}>Stats</a></li>
      <li><a href="/app/modules/settings" on:click={toggleVisibilityIfMobile}>Settings</a></li>
    </ul>
  </li>
  <li>
      <span>Demos</span>
      <ul>
        <li><a on:click={toggleVisibilityIfMobile} href="/demos/modal">Modal</a></li>
        <li><a on:click={toggleVisibilityIfMobile} href="/demos/alert-stack">Alert stack</a></li>
        <li><a on:click={toggleVisibilityIfMobile} href="/demos/tabs">Tabs</a></li>
        <!-- <li><a href="/demos/popper">Popper</a></li> -->
      </ul>
  </li>
  <!-- <li>
      <span>Drawing app</span>
      <ul>
        <li><a href="/drawing-app/">Main view</a></li>
      </ul>
  </li>
  <li>
      <span>Mobile app</span>
      <ul>
        <li><a href="/mobile-app/">Main view</a></li>
      </ul>
  </li> -->
</ul>