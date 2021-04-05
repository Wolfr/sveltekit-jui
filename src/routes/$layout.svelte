<script>
  import { navigating } from '$app/stores';

  import Spinner from '$lib/Spinner.svelte';
  
  import '../scss/app.scss';

  let pageIndexVisible = true;

  function toggleVisibility() {
    pageIndexVisible = !pageIndexVisible;
  }

  let trigger = '§';

  function handleKeydown(e) {
    if (e.key == trigger) {
      pageIndexVisible = !pageIndexVisible;
    }
  }

</script>
  
<svelte:head>
    <title>JUI</title>
</svelte:head>

<div class="br-prototype-wrapper" class:br-prototype-nav-is-open={pageIndexVisible}>
  <div class="br-prototype-wrapper__content">
    {#if $navigating}
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <Spinner />
      </div>
    {:else}
      <slot />
    {/if}
  </div>
  {#if pageIndexVisible}
  <div class="br-prototype-wrapper__nav">
    <div class="u-spacer">
      <div class="c-content">
        <p><button class="c-button c-button--secondary" on:click={toggleVisibility}>Close page tree</button></p>
        <h4 class="c-h6">Page index</h4>
        <p>Press § to show the page index.</p>
        <p>View the <a href="/styleguide">style guide</a>.</p>
      </div>
      <ul class="c-bordered-list">
        <li>
            <a href="/site/">Website</a>
        </li>
        <li>
            <span>Demos</span>
            <ul>
              <li><a href="/demos/modal">Modal</a></li>
              <li><a href="/demos/alert-stack">Alert stack</a></li>
              <li><a href="/demos/popover">Popover</a></li>
            </ul>
        </li>
        <li>
          <span>App</span>
          <ul>
            <li><a href="/app/">Sign in</a></li>
            <li><a href="/app/forgot-password">Forgot password</a></li>
            <li>
              <a href="/app/modules/todos">Todos</a>
              <ul>
                <li><a href="/app/modules/todos/detail">Detail</a></li>
              </ul>
            </li>
            <li><a href="/app/modules/stats">Stats</a></li>
            <li><a href="/app/modules/settings">Settings</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
  {/if}

</div>

<svelte:window on:keydown={handleKeydown}/>

<style lang="scss">

  
  /* Better display for modals when prototype nav is open
     ========================================================================== */

  :global(.br-prototype-nav-is-open .c-modal) {
    left: 11%;
    position: relative;
    &.c-modal--fullscreen {
      left: 0;
      padding-left: calc(25rem);
    }
  }

</style>