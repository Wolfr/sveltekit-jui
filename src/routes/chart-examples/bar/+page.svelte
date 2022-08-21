<script>
  import { LayerCake, Svg } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import Bar from '$lib/layercake-components/Bar.svelte';
  import AxisX from '$lib/layercake-components/AxisX.svelte';
  import AxisY from '$lib/layercake-components/AxisY.svelte';

  let data = [
      {
        year: 1979,
        value: 2
      },
      {
        year: 1980,
        value: 3
      },
      {
        year: 1981,
        value: 5
      },
      {
        year: 1982,
        value: 8
      },
      {
        year: 1983,
        value: 18
      }
    ];

  const xKey = 'value';
  const yKey = 'year';

  data.forEach(d => {
    d[xKey] = +d[xKey];
  });
</script>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */

  .chart-container {
    width: 100%;
    height: 500px;
    font-family: sans-serif;
  }
</style>

<div class="chart-container">
  <LayerCake
    padding={{ top: 0, bottom: 20, left: 35 }}
    x={xKey}
    y={yKey}
    yScale={scaleBand().paddingInner([0.05]).round(true)}
    yDomain={['1979', '1980', '1981', '1982', '1983']}
    xDomain={[0, null]}
    data={data}
  >
    <Svg>
      <AxisX
        gridlines={true}
        baseline={true}
        snapTicks={true}
      />
      <AxisY
        gridlines={false}
      />
      <Bar/>
    </Svg>
  </LayerCake>
</div>