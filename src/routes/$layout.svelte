<script>
  import { navigating } from '$app/stores';

  import Spinner from '$lib/Spinner.svelte';
  
  import 'mono-icons/iconfont/icons.css';
  import '../scss/main.scss';
  import '../scss/styleguide.scss';
  
  let pageIndexVisible = true;

  function toggleVisibility() {
    pageIndexVisible = !pageIndexVisible;
  }

  function handleKeydown (evt) { 
    if (!evt) evt = event; 
      // Ctrl+m or Ctrl+b as alternative
      if (evt.ctrlKey && evt.keyCode === 77 || evt.ctrlKey && evt.keyCode === 66) { 
        toggleVisibility();
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
        <p>Press Ctrl+m to show the page index.</p>
      </div>
      <ul class="c-bordered-list c-bordered-list--small">
        <li>
          <a href="/styleguide/">Style guide</a>
        </li>
        <li>
            <span>Website</span>
            <ul>
              <li><a href="/site/">Media example</a></li>
              <li><a href="/site/blog">Blog list</a></li>
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
        <li>
            <span>Demos</span>
            <ul>
              <li><a href="/demos/modal">Modal</a></li>
              <li><a href="/demos/alert-stack">Alert stack</a></li>
              <li><a href="/demos/tabs">Tabs</a></li>
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

    </div>
  </div>
  {/if}

</div>

<svelte:window on:keydown={handleKeydown}/>

