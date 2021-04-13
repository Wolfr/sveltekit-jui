<script>
  import { afterUpdate, createEventDispatcher } from "svelte";
  import Button from "$lib/Button.svelte";
  import ButtonToolbar from "$lib/ButtonToolbar.svelte";

  export let forwardText = "Next";
  export let previousText = "Previous";
  export let totalPages = 10;
  export let currentPage = 1;
  export let pageLimit = 7;

  const dispatcher = createEventDispatcher();

  let internalPage = currentPage;
  let MORE = Symbol();

  afterUpdate(() => {
    dispatcher("pageIndex", { internalPage });
  });

  $: pages = createPages(totalPages, pageLimit, internalPage);
  $: isPreviousDisabled = internalPage === 1 ? true : false;
  $: isForwardDisabled = internalPage === +totalPages ? true : false;

  function createPages(totalPages, pageLimit, internalPage) {
    if (totalPages <= pageLimit) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const rangeSize = pageLimit - 2;
    let rangeStart = internalPage - Math.floor(rangeSize / 2);
    let rangeEnd = rangeStart + rangeSize;

    if (rangeStart < 2) {
      rangeStart = 2;
      rangeEnd = rangeStart + rangeSize;
    }

    if (rangeEnd > totalPages) {
      rangeEnd = totalPages;
      rangeStart = rangeEnd - rangeSize;
    }

    return [
      rangeStart > 2 && MORE,
      ...Array.from({ length: rangeEnd - 1 }, (_, i) => i + 1),
      rangeEnd < totalPages && MORE,
      +totalPages,
    ].filter(Boolean);
  }

  function setPage(value) {
    const newPage = Math.min(Math.max(value, 1), totalPages);
    if (newPage !== internalPage) {
      internalPage = newPage;
      dispatcher("pageIndex", { newPage });
    }
  }

</script>

<div class="c-pagination">
  <Button
    on:click={() => {
      setPage(internalPage - 1);
      dispatcher("previous", { internalPage });
    }}
    layout="icon-label"
    bind:disabled={isPreviousDisabled}
    icon="chevron-left"
    cssClass="c-pagination__previous">{previousText}</Button
  >

  <ButtonToolbar>
    {#each pages as page}
      {#if page === MORE}
        <span aria-hidden="true" class="c-pagination__ellipsis">...</span>
      {:else}
        <Button
          skin="borderless"
          on:click={() => {
            setPage(page);
          }}
          active={page == internalPage}>{page}</Button
        >
      {/if}
    {/each}
  </ButtonToolbar>

  <Button
    on:click={() => {
      setPage(internalPage + 1);
      dispatcher("forward", { internalPage });
    }}
    layout="label-icon"
    bind:disabled={isForwardDisabled}
    icon="chevron-right"
    cssClass="c-pagination__next">{forwardText}</Button
  >
</div>
