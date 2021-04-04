
<script>
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

<div class="br-prototype-wrapper">
  <div class="br-prototype-wrapper__content">
    <slot />
  </div>
  {#if pageIndexVisible}
  <div class="br-prototype-wrapper__nav">
    <div class="u-spacer">
      <div class="c-content">
        <p><button class="c-button c-button--secondary" on:click={toggleVisibility}>Close page tree</button></p>
        <h4 class="c-h6">Page index</h4>
        <p>Press § to show the page index.</p>
        <p>View the <a href="/styleguide">style guide</a>.</p>

        <ul>
          <li>
              <a href="/site/">Website</a>
          </li>
          <li>
            <a href="/app">App</a>
            <ul>
              <li><a href="/app/">Login</a></li>
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
  </div>
  {/if}

</div>


<svelte:window on:keydown={handleKeydown}/>

