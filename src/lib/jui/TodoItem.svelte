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

<style>
  
  :global(.strikethrough) {
    text-decoration: line-through;
  }

</style>