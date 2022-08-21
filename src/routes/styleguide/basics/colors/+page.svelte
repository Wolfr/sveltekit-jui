<script>

let data = [
    { name: 'gray-50 ',       hex: "#F2F2F2",    category: "Grays" },
    { name: 'gray-100',       hex: "#E6E6E6",    category: "Grays" },
    { name: 'gray-150',       hex: "#D9D9D9",    category: "Grays" },
    { name: 'gray-200',       hex: "#CCCCCC",    category: "Grays" },
    { name: 'gray-300',       hex: "#B3B3B3",    category: "Grays" },
    { name: 'gray-400',       hex: "#999999",    category: "Grays" },
    { name: 'gray-500',       hex: "#808080",    category: "Grays" },
    { name: 'gray-550',       hex: "#737373",    category: "Grays" },
    { name: 'gray-600',       hex: "#666666",    category: "Grays" },
    { name: 'gray-700',       hex: "#4D4D4D",    category: "Grays" },
    { name: 'gray-800',       hex: "#333333",    category: "Grays" },
    { name: 'gray-850',       hex: "#262626",    category: "Grays" },
    { name: 'gray-900',       hex: "#1A1A1A",    category: "Grays" },
    { name: 'gray-950',       hex: "#0D0D0D",    category: "Grays" },
    { name: 'blue-gray-25',   hex: '#F9FAFC',    category: 'Blue Grays' },
    { name: 'blue-gray-50',   hex: '#F5F6F9',    category: 'Blue Grays' },
    { name: 'blue-gray-100',  hex: '#E9ECF1',    category: 'Blue Grays' },
    { name: 'blue-gray-150',  hex: '#DEE1E8',    category: 'Blue Grays' },
    { name: 'blue-gray-200',  hex: '#CED3DE',    category: 'Blue Grays' },
    { name: 'blue-gray-300',  hex: '#A8AFBE',    category: 'Blue Grays' },
    { name: 'blue-gray-400',  hex: '#959DAC',    category: 'Blue Grays' },
    { name: 'blue-gray-500',  hex: '#737C8D',    category: 'Blue Grays' },
    { name: 'blue-gray-600',  hex: '#576175',    category: 'Blue Grays' },
    { name: 'blue-gray-700',  hex: '#414959',    category: 'Blue Grays' },
    { name: 'blue-gray-800',  hex: '#2B303B',    category: 'Blue Grays' },
    { name: 'blue-gray-900',  hex: '#15181F',    category: 'Blue Grays' },
    { name: 'red-200',        hex: '#F8E8ED',    category: 'Reds' },
    { name: 'red-500',        hex: '#D34D4D',    category: 'Reds' },
    { name: 'green-200',      hex: '#EBF9F6',    category: 'Greens' },
    { name: 'green-500',      hex: '#37C8AB',    category: 'Greens' },
    { name: 'orange-200',     hex: '#FEF9EA',    category: 'Oranges' },
    { name: 'orange-500',     hex: '#EEB902',    category: 'Oranges' }
  ]
  
  let groups = data.reduce((curr, val) => {
    let group = curr.find(g => g.category === `${val.category}`)
    if (group) {
      group.values.push(val)
    } else {
      curr.push({ category: `${val.category}`, values: [ val ] }) 
    }
    return curr
  }, [])
  
  let pageTitle = "Colors"

</script>

<style>

  :global(.c-styleguide-color-list) {
    display: flex;
    flex-wrap: wrap;
  }

  :global(.c-styleguide-color-list li) {
    text-align: center;
    break-inside: avoid;
    margin: 0.8rem 0;
    flex: 0 0 25%;
  }

  :global(.c-styleguide-color-categories li) {
    padding: 0.8rem 0;
  }

  .c-swatch {
     height: 6.4rem;
     width: 6.4rem;
     border-radius: 100%;
     margin: 0 auto 1rem;
  }
  
  small {
    font-size: 1.3rem;
    opacity: .5;
  }

</style>

<svelte:head>
  <title>{pageTitle} - Basics - JUI</title>
</svelte:head>

<h1 class="c-h1">{pageTitle}</h1>

<div class="u-spacer-bottom-l">
  <div classs="c-content">
    <p>Available colors. Colors are organized by hue (color name) and lightness (number).</p>
  </div>
</div>

<ul class="c-styleguide-color-categories">
  {#each groups as group}
    <li>
      <h2 class="c-h3">{group.category}</h2>
      <ul class="c-styleguide-color-list">
        {#each group.values as item}
        <li>
            <div class="c-swatch" style="background: {item.hex};"></div>
            {item.name}<br>
            <small>{item.hex}</small>
        </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>