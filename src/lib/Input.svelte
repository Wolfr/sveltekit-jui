<script>
  export let value = null;
  export let type = "text";
  export let placeholder = null;
  export let autocomplete = null;
</script>

{#if type == "password"}
  <input class="c-input" {placeholder} type="password" bind:value={value} {autocomplete} />
{/if}
{#if type == "email"}
  <input class="c-input" {placeholder} type="email" bind:value={value} {autocomplete} />
{/if}
{#if !type || type == "text"}
  <input class="c-input" {placeholder} type="text" bind:value={value} {autocomplete} />
{/if}
{#if type == "search"}
  <input class="c-input" {placeholder} type="search" bind:value={value} {autocomplete} />
{/if}