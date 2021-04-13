<script>

  import { navigating } from '$app/stores';

  import Spinner from '$lib/Spinner.svelte';
  import Button from '$lib/Button.svelte';
  import PageTree from '$lib/PageTree.svelte';

  import 'mono-icons/iconfont/icons.css';
  import '../scss/main.scss';
  import '../scss/styleguide.scss';
  
  import { pageIndexVisibility } from '$lib/page-index.js';

  function toggleVisibility() {
    $pageIndexVisibility[0].pageIndexVisible = !$pageIndexVisibility[0].pageIndexVisible;
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

<svelte:window
  on:keydown={handleKeydown}
></svelte:window>

<div class="br-prototype-wrapper" class:br-prototype-nav-is-open={$pageIndexVisibility[0].pageIndexVisible}>
  <div class="br-prototype-wrapper__content">
    {#if $navigating}
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <Spinner />
      </div>
    {:else}
      <slot />
    {/if}
  </div>
  {#if $pageIndexVisibility[0].pageIndexVisible}
  <nav class="br-prototype-wrapper__nav">
    <div class="u-spacer">

      <Button on:click={toggleVisibility}>Close page tree</Button>

      <div class="c-content u-spacer-top">
        <h4 class="c-h6">Page index</h4>
        <p>Press <kbd>Ctrl+m</kbd> to show the page index.</p>
      </div>
     
     <h4>All pages</h4>

      <PageTree />

    </div>
  </nav>
  {/if}

</div>

