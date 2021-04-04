<script>
    import Card from '$lib/Card.svelte';

    import { LayerCake, Svg } from 'layercake';

    import Line from './components/Line.svelte';
    import Area from './components/Area.svelte';
    import AxisX from './components/AxisX.svelte';
    import AxisY from './components/AxisY.svelte';

    // This example loads csv data as json using @rollup/plugin-dsv
    import data from './data/points.csv';

    const xKey = 'myX';
    const yKey = 'myY';

    data.forEach(d => {
      d[yKey] = +d[yKey];
    });
    

  </script>


<div class="u-spacer-l">

  <div class="container">

    <h2 class="c-h2">Hello world.</h2>

    <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Card>
  </div>
  
  <div class="chart-container">
    <LayerCake
      padding={{ right: 10, bottom: 20, left: 25 }}
      x={xKey}
      y={yKey}
      yDomain={[0, null]}
      data={data}
    >
      <Svg>
        <AxisX/>
        <AxisY
          ticks={4}
        />
        <Line/>
        <Area/>
      </Svg>
    </LayerCake>
  </div>
  
</div>



<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 100%;
  }
</style>

