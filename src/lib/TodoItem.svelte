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
    <Checkbox bind:checked={todo.completed} label={todo.title} cssClass="strikethrough" />
    <!-- {todo.id} -->
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

  .c-todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem;
  }
  
  :global(.c-todo-item .strikethrough) {
    text-decoration: line-through;
  }

</style>