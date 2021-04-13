<script>
  import RichContent from '$lib/RichContent.svelte';
  let pageTitle = "Technical notes";
</script>

<svelte:head>
  <title>{pageTitle} - Dev notes - JUI</title>
</svelte:head>

<div class="o-container o-container--medium">
  <RichContent>
    <h2 id="technical-notes">Technical notes</h2>
    <p>For those who are curious, here is the technical reasoning behind the way this framework is set up.</p>
    <h3 id="compilers">Compilers</h3>
    <ul>
    <li>We use Svelte and Sass, both of which are compilers. This means we can pre-calculate as much as possible and we avoid calculating things on the client</li>
    </ul>
    <h3 id="sveltekit">SvelteKit</h3>
    <ul>
    <li>Using the power of Sveltekit, we can have an SPA, SSR or static site</li>
    <li>Next to this we have the power of adapters to easily deploy to Netlify, Vercel etc.</li>
    </ul>
    <h3 id="component-composition-strategy">Component composition strategy</h3>
    <ul>
    <li>Svelte is a compiler which can compile ahead of time, so there is no reason to minimize the amount of wrapper components</li>
    <li>Having a set of wrapper components that can work in conjunction, allows us to specify a component API on top of them</li>
    <li>We deliberately sometimes have more markup than needed for composition flexibility reasons, the ButtonInnerLayout and Toolbar components are good examples</li>
    <li>We deliberately do not specify utility classes for flexbox, as I find building an API that mimics flexbox&#39;s API just leads to a plethora of classes that have a 1:1 relationship; not helping with anything.</li>
    </ul>
    <h3 id="css-strategy">CSS strategy</h3>
    <ul>
      <li><p>We use ITCSS to sort our CSS components</p></li>
      <li><p>Sometimes, duplication is better than abstraction. To avoid tangling unrelated components, even if they share many similarities, code is duplicated (e.g. NavMenu vs SelectMenu)</p></li>
      <li><p>We avoid using Svelte&#39;s style tag, so we can make use of consistent SCSS variables and have a way for variables to influence each other with a passthrough logic, something which CSS custom properties is not entirely ready for</p></li>
      <li><p>When customizing this framework, I recommend throwing out all SCSS partials for components you do not use to minimize the final stylesheet</p></li>
      <li><p>We use as much semantic HTML as possible</p></li> 
      <li><p>We use as much progressive enhancement that doesn&#39;t cause browser bugs</p>
          <ul>
            <li>This means that some level of PE is avoided where it is unclear what the global support is for said logic</li>
            <li>The biggest reason for PE is screen reader usage</li>
          </ul>
        </li>
        <li><p>We use BEM for components to make it clear which components belong together e.g.</p>
  <pre class="c-pre"><code>&lt;ul class=&quot;c-pill-list&quot;&gt;
      &lt;li class=&quot;c-pill-list__item&quot;&gt;
          &lt;span class=&quot;c-pill c-pill--default&quot;&gt;
      &lt;/li&gt;
      &lt;li class=&quot;c-pill-list__item&quot;&gt;
          &lt;span class=&quot;c-pill c-pill--default&quot;&gt;
      &lt;/li&gt;
  &lt;/ul&gt;</code></pre>
    </li>
    </ul>
  </RichContent>
</div>
