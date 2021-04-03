<script>
  import Button from '$lib/Button.svelte';
  import Checkbox from '$lib/Checkbox.svelte';
  
  export let todo;
  
  function handleDelete() {
    alert('Delete this item');
  }

</script>

<li class="c-todo-item">
  <div>
    <Checkbox bind:checked={todo.completed} />
    {todo.title} {todo.id}
  </div>
  <Button on:click={handleDelete} icon="delete" layout="icon">Remove</Button>

</li>

<style lang="scss">

  :global(.c-todo-list li) {
    border-bottom: .1rem solid #CCC;
    &:last-child {
      border: none;
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem;
  }

</style>