<script>

  import Tabs from '$lib/jui-components/Tabs.svelte';

  let tabItems = [
      { label: "Label", value: "1" },
      { label: "Label", value: "2" },
      { label: "Label", value: "3" }
  ];

</script>

<svelte:head>
    <title>Tabs - Demos - JUI</title>
</svelte:head>

<div class="u-spacer-l">

    <div class="container">

    <h2 class="c-h2">Tabs</h2>

    <Tabs items={tabItems} />
    
  </div>
</div>
