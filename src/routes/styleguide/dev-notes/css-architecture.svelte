<script>
  import StyleguideIntro from '$lib/StyleguideIntro.svelte';
  import StyleguideCard from '$lib/StyleguideCard.svelte';

  let pageTitle = 'CSS Architecture';

</script>

<svelte:head>
  <title>{pageTitle} - Dev notes - JUI</title>
</svelte:head>

<div class="o-container o-container--medium">
  <div class="c-content">
    <h2>CSS Architecture</h2>
    <div class="u-spacer-top u-spacer-bottom">
      <p>This project's CSS architecture uses a combination of the BEM naming convention and the Inverted Triangle CSS architecture in order to have a maintainable, readable and scalable code structure.</p>
      <h3>BEM</h3>
      <p>BEM stands for Block Element Modifier and it categorizes the code into three groups:</p>
      <ul>
        <li>Blocks which are a standalone entities that are meaningful on their own, for example <code>.c-menu</code>.</li>
        <li>Elements which are part of a block and have no standalone meaning and are semantically tied to a block, for example <code>c-menu__item</code>.</li>
        <li>Modifiers which are variants or flags on a block or element and are used to change the appearance or behavior, for example <code>c-menu--disabled</code>.</li>
      </ul>
      <p>The BEM naming convention helps to see how classes are related to each other.</p>
      <p>For more information about BEM, please refer to this <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">excellent article</a> by Harry Roberts.</p>
      <h3>Namespacing and ITCSS</h3>
      <p>This project's CSS architecture uses namespacing. This means that every class in the codebase is prefixed with a certain string to explain what the code does and to avoid style leakage.</p>
      <p>The namespaces are also used to separate the code base into different layers and this is where ITCSS comes into place.</p>
      <p>The different layers that you find within the ITCSS architecture are, in the following order:</p>
      <ul>
        <li>
          <strong>Settings</strong>, which are used with preprocessors and contain font, colors variables.
        </li>
        <li>
          <strong>Tools</strong>, which is a layer used for mixins and functions.
        </li>
        <li>In the <strong>generic</strong> layer you can find ground-zero styles like resets, normalize styles and box-sizing.</li>
        <li>
          <strong>Base Elements</strong> which styles bare, unclassed HTML elements to redefine the default styling from browsers.
        </li>
        <li>
          <strong>Objects</strong>, which is a layer used for undecorated design patterns, it is prefixed with <code>o-</code>.
        </li>
        <li>
          <strong>Components</strong>, which is used to style specific UI components, here you will find the majority of the code and classes within this layer are prefixed with <code>c-</code>.
        </li>
        <li>
          <strong>Utilities</strong>, which are helper and override styles and namespaced with <code>u-</code>.
        </li>
      </ul>
      <p>The codebase is structured in this order so that it is ordered from generic to explicit styles, low-specificity to more specificity (ID selectors are avoided as much as possible) and far reaching to local styles, which makes the framework scalable and maintainable.</p>
      <p>For more information on ITCSS, please refer to this <a href="https://speakerdeck.com/dafed/managing-css-projects-with-itcss">slideshow</a>.</p>

      <h3>Svelte specific: Inline Svelte <code>&lt;style&gt;</code> usage</h3>
      <p>Where appropriate, use Svelte's inline styles, for example for uncommon components. This way the main stylesheet gets less bloated.</p>
    
    </div>
  </div>
</div>