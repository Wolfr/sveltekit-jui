<script>
  import { LayerCake, Svg, Html, Canvas } from 'layercake';

  import AxisX from '$lib/layercake-components/AxisX.svelte';
  import AxisY from '$lib/layercake-components/AxisY.svelte';
  import Line from '$lib/layercake-components/Line.svelte';

  const data = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 5, y: 4 },
    { x: 6, y: 5 },
    { x: 7, y: 6 },
    { x: 8, y: 7 },
  ];
</script>

<style>
  /* Set dimensions on the parent.
     The <LayerCake> component will expand to fill it.
   */
  .chart-container {
    width: 100%;
    height: 500px;
    font-family: sans-serif;
  }
</style>

<div class="chart-container">
  <LayerCake padding={{ right: 10, bottom: 20, left: 35 }}
    x='x'
    y='y'
    {data}
  >
  <AxisX />
    <Svg>
      <AxisX ticks={10} />
      <AxisY ticks={10} />
      <Line color='#f0c'/>
    </Svg>
  </LayerCake>
</div>
