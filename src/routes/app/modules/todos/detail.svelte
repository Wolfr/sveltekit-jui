
<script>
  import Alert from '$lib/Alert.svelte';
  import Badge from '$lib/Badge.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Input from '$lib/Input.svelte';
  import Navbar from '$lib/Navbar.svelte';
  
  import FormGroup from '$lib/FormGroup.svelte';
  import FormGroupLayout from '$lib/FormGroupLayout.svelte';
  
  // Specific
  import TodoItem from '$lib/TodoItem.svelte';

  // Toolbar
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
  let todoText = '';
  
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
    <ToolbarGroup align="left">
      <ToolbarItem>
        <Button href="../todos" layout="icon" skin="borderless" icon="chevron-left">Back</Button>
      </ToolbarItem>
      <ToolbarItem>
        <ToolbarTitle tag="h2">Todo list 1</ToolbarTitle>
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
</Navbar>

<main>
  <div class="u-spacer">
    <form on:submit|preventDefault={addTodo} style="width: 100%;">
      <FormGroupLayout layoutType="inline">
        <FormGroup cssClass="o-form-group--inline-grow" layoutType="inline">
          <Input type="text" bind:value={todoText}  />
        </FormGroup>
        <FormGroup cssClass="o-form-group--inline-shrink" layoutType="inline">
          <Button on:submit={addTodo} on:click={addTodo} icon="add" disabled={todoText==''}>Add item</Button>
        </FormGroup>
      </FormGroupLayout>
    </form>
  
    <div class="o-container-vertical">
      <ul class="c-todo-list">
        {#each todos as todo}
          <TodoItem {todo} />
        {/each}
      </ul>
    </div>
  </div>
</main>

