
<script>
  import Alert from '$lib/Alert.svelte';
  import Badge from '$lib/Badge.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Input from '$lib/Input.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import TodoItem from '$lib/TodoItem.svelte';
  import Toolbar from '$lib/Toolbar.svelte';
  import ToolbarGroup from '$lib/ToolbarGroup.svelte';
  import ToolbarItem from '$lib/ToolbarItem.svelte';
  import ToolbarTitle from '$lib/ToolbarTitle.svelte';

  // Todos should become a store so it can persist a bit more
  let todos = [
    {
      title: 'Get groceries',
      id: 1,
      completed: true
    },
    {
      title: 'Mow the lawn',
      id: 2,
      completed: false
    }
  ];

  // Base values
  let nextId = 3;
  let todoText = 'bd';
  
  $: todoValue = { title: todoText, id: nextId, completed: false };
  
  $: console.log(todoValue);

  function addTodo() {
    todos = [...todos, todoValue];
    todoText = '';
    nextId = nextId++;
  }

</script>

<Navbar>
  <Toolbar>
    <ToolbarGroup position="left">
      <ToolbarItem>
        <Button href="../todos" layout="icon" icon="chevron-left">Back</Button>
      </ToolbarItem>
      <ToolbarItem>
        <ToolbarTitle tag="h2">Todo list 1</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<main>
  <div class="u-spacer">
    <div class="o-container-vertical">
        <form preventdefault>
          <Input type="text" bind:value={todoText} />
          <Button on:submit={addTodo} on:click={addTodo} icon="add">Add item</Button>
        </form>
    </div>
  
    <div class="o-container-vertical">
      <ul class="c-todo-list">
        {#each todos as todo}
          <TodoItem {todo} />
        {/each}
      </ul>
    </div>
  </div>
</main>

