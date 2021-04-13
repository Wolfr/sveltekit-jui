<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';
  import RichContent from '$lib/RichContent.svelte';

  let pageTitle = 'Container';

</script>

<svelte:head>
  <title>{pageTitle} - Objects - JUI</title>
</svelte:head>

<StyleguideIntro title={pageTitle} />

<RichContent>
  <p>Use the container object to control the maximum width on the horizontal axis, and the spacing on the vertical axis.</p>
  <p>Combine a <code>o-container-vertical</code> div with a child <code>.o-container</code> div to create clear and defined content sections with consistent spacing.</p>
  <p>For the clearest demo, view this on a large screen or zoom out your browser too see the maximum widths kicking in.</p>
</RichContent>

<StyleguideCard title="Container">
  <div class="o-container-vertical o-container-vertical--bg-alt">
      <div class="o-container o-container--small">
          <p class="c-body-1">I am content with a <strong>small</strong> horizontal container.</p>
          <p class="c-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </div>
  <div class="o-container-vertical">
      <div class="o-container o-container--medium">
          <p class="c-body-1">I am content with a <strong>medium</strong> horizontal container.</p>
          <p class="c-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </div>
  <div class="o-container-vertical o-container-vertical--bg-alt">
      <div class="o-container o-container--large">
          <p class="c-body-1">I am content with a <strong>large</strong> horizontal container.</p>
          <p class="c-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </div>
  <div class="o-container-vertical">
      <div class="o-container  o-container--x-large">
          <p class="c-body-1">I am content with an <strong>unrestricted</strong> horizontal container.</p>
          <p class="c-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </div>
</StyleguideCard>
