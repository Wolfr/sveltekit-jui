<script>
  import { onMount } from 'svelte';
  export let id = '';
  export let value = [];
  export let readonly = false;
  export let placeholder = '';

  let input,
    inputValue,
    options = [],
    activeOption,
    showOptions = false,
    selected = {},
    first = true,
    slot
  const iconClearPath = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';

  onMount(() => {
    slot.querySelectorAll('option').forEach(o => {
      o.selected && !value.includes(o.value) && (value = [...value, o.value]);
      options = [...options, {value: o.value, name: o.textContent}]
    });
    value && (selected = options.reduce((obj, op) => value.includes(op.value) ? {...obj, [op.value]: op} : obj, {}));
    first = false;
  });

  $: if (!first) value = Object.values(selected).map(o => o.value);
  $: filtered = options.filter(o => inputValue ? o.name.toLowerCase().includes(inputValue.toLowerCase()) : o);
  $: if (activeOption && !filtered.includes(activeOption) || !activeOption && inputValue) activeOption = filtered[0];


  function add(token) {
    if (!readonly) selected[token.value] = token;
  }

  function remove(value) {
    if (!readonly) {
      const {[value]: val, ...rest} = selected;
      selected = rest;
    }
  }

  function optionsVisibility(show) {
    if (readonly) return;
    if (typeof show === 'boolean') {
      showOptions = show;
      show && input.focus();
    } else {
      showOptions = !showOptions;
    }
    if (!showOptions) {
      activeOption = undefined;
    }
  }

  function handleKeyup(e) {
    if (e.keyCode === 13) {
      Object.keys(selected).includes(activeOption.value) ? remove(activeOption.value) : add(activeOption);
      inputValue = '';
    }
    if ([38,40].includes(e.keyCode)) { // up and down arrows
      const increment = e.keyCode === 38 ? -1 : 1;
      const calcIndex = filtered.indexOf(activeOption) + increment;
      activeOption = calcIndex < 0 ? filtered[filtered.length - 1]
        : calcIndex === filtered.length ? filtered[0]
        : filtered[calcIndex];
    }
  }

  function handleBlur(e) {
    optionsVisibility(false);
  }

  function handleTokenClick(e) {
    if (e.target.closest('.token-remove')) {
      e.stopPropagation();
      remove(e.target.closest('.token').dataset.id);
    } else if (e.target.closest('.remove-all')) {
      selected = [];
      inputValue = '';
    } else {
      optionsVisibility(true);
    }
  }

  function handleOptionMousedown(e) {
    const value = e.target.dataset.value;
    if (selected[value]) {
      remove(value);
    } else {
      add(options.filter(o => o.value === value)[0]);
      input.focus();
    }
  }
</script>

<style>

  .hidden {
    display: none;
  }
</style>

<div class="c-multiselect" class:readonly>
  <div class="c-multiselect__tokens" class:showOptions on:click={handleTokenClick}>
    {#each Object.values(selected) as s}
      <div class="token" data-id="{s.value}">
        <span>{s.name}</span>
        {#if !readonly}
          <div class="token-remove" title="Remove {s.name}">
            <svg class="icon-clear" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path d="{iconClearPath}"/>
            </svg>
          </div>
        {/if}
      </div>
    {:else}
      Enter a value...
    {/each}
    <div class="c-multiselect__actions">
      {#if !readonly}
        <input id={id} autocomplete="off" bind:value={inputValue} bind:this={input} on:keyup={handleKeyup} on:blur={handleBlur} placeholder={placeholder}/>
        <div class="remove-all" title="Remove All" class:hidden={!Object.keys(selected).length}>
          <svg class="icon-clear" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path d="{iconClearPath}"/>
          </svg>
        </div>
        <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"></path></svg>
      {/if}
    </div>
  </div>

  <select bind:this={slot} type="multiple" class="hidden"><slot></slot></select>

  {#if showOptions}
    <ul class="options" on:mousedown|preventDefault={handleOptionMousedown}>
      {#each filtered as option}
        <li class:selected={selected[option.value]} class:active={activeOption === option} data-value="{option.value}">{option.name}</li>
      {/each}
    </ul>
  {/if}
</div>