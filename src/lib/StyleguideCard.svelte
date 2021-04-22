<script>
  import Prism from '$lib/Prism.svelte';
  import kebabCase from 'just-kebab-case';

  import StyleguideCardInner from '$lib/StyleguideCardInner.svelte';

  export let style = null;
  export let title = null;
  export let code = null;
  export let description = null;
  export let id = null;

  $: if (!id) {
    id = kebabCase(title);
  }

  let showCode = false;


  function toggleCode() {
    showCode = !showCode;
  }

  let textarea;
  let copied = false;

  function copyCode() {
    copied = !copied;
    textarea.select();
    document.execCommand('copy');
  }

  import { page } from '$app/stores';
  $: dynLink = $page.path + '#' + id;

</script>

<div class="o-container-vertical" {id}>
  {#if title}
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <h3 class="c-h3">{title}</h3>
    <a href={dynLink} style="opacity: 0.5;">#</a>
  </div>
  {/if}
  {#if description}
    <div class="c-content">{@html description}</div>
  {/if}

  <StyleguideCardInner {style}>
    <slot />
  </StyleguideCardInner>

  <textarea class="copy-code-textarea" bind:value={code} bind:this={textarea}></textarea>

  {#if code}
    <button class="c-show-code-button c-tiny-button" on:click={toggleCode}>{#if !showCode}Show code{:else}Hide code{/if}</button>
    {#if showCode}
      <div class="c-styleguide-code-block">
        <Prism cssClass="c-pre" source={code} />
        <button class="c-copy-code-button c-tiny-button" on:click={copyCode}>{#if copied}Copied!{:else}Copy code{/if}</button>
      </div>
    {/if}
  {/if}
</div>

<style>

  .copy-code-textarea {
    position: absolute;
    left: -9000px;
  }

  .c-show-code-button {
    margin-top: .8rem;
  }

  .c-styleguide-code-block {
    margin: 1rem 0 0 ;
    position: relative;
  }

  .c-copy-code-button {
    position: absolute;
    top: .8rem;
    right: .8rem;
  }

</style>