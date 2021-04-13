<script>
  import prism from "prismjs";

  import { tick } from "svelte";

  export let cssClass = null;
  export let language = "xml";
  export let source = "";
  export let transform = (x) => x;
  let element, formattedCode;

  $: $$props && (source || element) && highlightCode();

  function highlightCode() {
    const grammar = prism.languages[language];
    let body = source || element.textContent;
    body = { transform: (x) => x }.transform(body);
    body = transform(body);
    formattedCode =
      language === "none" ? body : prism.highlight(body, grammar, language);
  }
</script>

<code bind:this={element} style="display:none">
  <slot />
</code>

<pre class="{cssClass} language-{language}">
  <code class="language-{language}">
    {#if language === 'none'}
      {formattedCode}
    {:else}
      {@html formattedCode}
    {/if}
  </code>
</pre>
