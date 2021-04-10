<script>
  import Prism from '$lib/Prism.svelte';
  import StyleguideCardInner from '$lib/StyleguideCardInner.svelte';

  export let style;
  export let title = null;
  export let code = null;
  export let description = null;
  export let id = null;

  let showCode = false;

  function toggleCode() {
    showCode = !showCode;
  }
</script>

<div class="o-container-vertical" {id}>
  {#if title}
  <h3 class="c-h3">{title}</h3>
  {/if}
  {#if description}
    <div class="c-content">{@html description}</div>
  {/if}

  <StyleguideCardInner {style}>
    <slot />
  </StyleguideCardInner>

  {#if code}
    <button class="c-show-code-button c-tiny-button" on:click={toggleCode}>{#if !showCode}Show code{:else}Hide code{/if}</button>
    {#if showCode}
      <div class="c-styleguide-code-block">
        <Prism cssClass="c-pre" source={code} />
        <!-- <button class="c-copy-code-button c-tiny-button" on:click={copyCode}>Copy code</button> -->
      </div>
      
    {/if}
  {/if}
</div>

<style>

  .c-show-code-button {
    margin-top: .8rem;
  }

  .c-styleguide-code-block {
    margin: 1rem 0 0 ;
    position: relative;
  }

  .c-tiny-button {
    border: .1rem solid #CED3DE;
    background: #FFF;
    border-radius: .3rem;
    padding: .3rem .8rem;
    font-size: 1.3rem;
  }

  .c-copy-code-button {
    position: absolute;
    top: .8rem;
    right: .8rem;
  }

</style>