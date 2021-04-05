<script>
  import Button from '$lib/Button.svelte';
  import ButtonToolbar from '$lib/ButtonToolbar.svelte';
  export let totalPages = 1;
  export let currentPage = 1;
</script>


<div class="c-pagination">
  
  <Button icon="chevron-left" disabled cssClass="c-pagination__previous">Previous</Button>

  <ButtonToolbar>
  {#each {length: totalPages} as elem, index}
    <Button skin="borderless" active={ index+1 == currentPage }>{index+1}</Button>
  {/each}
  </ButtonToolbar>

  <Button layout="label-icon" icon="chevron-right" cssClass="c-pagination__next">Next</Button>

</div>
