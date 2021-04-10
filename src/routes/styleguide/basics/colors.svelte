<script>

  let data = [
    {
      name: 'gray-25',
      hex: '#F9FAFC',
      category: 'Grays'
    },
    {
      name: 'gray-50',
      hex: '#F5F6F9',
      category: 'Grays'
    },
    {
      name: 'gray-100',
      hex: '#E9ECF1',
      category: 'Grays'
    },
    {
      name: 'gray-150',
      hex: '#DEE1E8',
      category: 'Grays'
    },
    {
      name: 'gray-200',
      hex: '#CED3DE',
      category: 'Grays'
    },
    {
      name: 'gray-300',
      hex: '#A8AFBE',
      category: 'Grays'
    },
    {
      name: 'gray-400',
      hex: '#959DAC',
      category: 'Grays'
    },
    {
      name: 'gray-500',
      hex: '#737C8D',
      category: 'Grays'
    },
    {
      name: 'gray-600',
      hex: '#576175',
      category: 'Grays'
    },
    {
      name: 'gray-700',
      hex: '#414959',
      category: 'Grays'
    },
    {
      name: 'gray-800',
      hex: '#2B303B',
      category: 'Grays'
    },
    {
      name: 'gray-900',
      hex: '#15181F',
      category: 'Grays'
    },
    {
      name: 'brand-blue-800',
      hex: '#003399',
      category: 'Brand'
    },
    {
      name: 'brand-blue',
      hex: '#427CF0',
      category: 'Brand'
    },
    {
      name: 'brand-blue-200',
      hex: '#E8EFFC',
      category: 'Brand'
    },
    {
      name: 'red-500',
      hex: '#D34D4D',
      category: 'Colors'
    },
    {
      name: 'red-200',
      hex: '#F8E8ED',
      category: 'Colors'
    },
    {
      name: 'green-500',
      hex: '#37C8AB',
      category: 'Colors'
    },
    {
      name: 'green-200',
      hex: '#EBF9F6',
      category: 'Colors'
    },
    {
      name: 'orange-500',
      hex: '#EEB902',
      category: 'Colors'
    },
    {
      name: 'orange-200',
      hex: '#FEF9EA',
      category: 'Colors'
    },
    {
      name: 'purple-500',
      hex: '#7B47EB',
      category: 'Colors'
    },
    {
      name: 'purple-200',
      hex: '#E5DAFB',
      category: 'Colors'
    },
    {
      name: 'aqua-500',
      hex: '#ACEEFD',
      category: 'Colors'
    },
    {
      name: 'darkblue-500',
      hex: '#263261',
      category: 'Colors'
    }
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
    <p>Available colors.</p>
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