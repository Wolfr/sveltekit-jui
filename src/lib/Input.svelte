<script>
  export let value = null;
  export let type = "text";
  export let placeholder = null;
  export let autocomplete = null;
  export let icon = null;
  import Icon from '$lib/Icon.svelte';

</script>

{#if type == "password"}
  <input class="c-input" {placeholder} type="password" bind:value={value} {autocomplete} />
{/if}
{#if type == "email"}
  <input class="c-input" required {placeholder} type="email" bind:value={value} {autocomplete} />
{/if}
{#if !type || type == "text"}
  <input class="c-input" {placeholder} type="text" bind:value={value} {autocomplete} />
{/if}
{#if type == "search"}
  {#if icon == "search"}
    <div class="c-input-with-icon">
      <Icon icon="search" />
      <input class="c-input" {placeholder} type="search" bind:value={value} {autocomplete} />
    </div>
  {:else}
    <input class="c-input" {placeholder} type="search" bind:value={value} {autocomplete} />
  {/if}
{/if}