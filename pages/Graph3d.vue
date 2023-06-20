<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { actualData } from './data';

const graph = ref<HTMLDivElement | null>(null);

const magnitudes = actualData.map((d) => d.Magnitude);
const redshifts = actualData.map((d) => d.Redshift);
const magnitudeLetters = actualData.map((d) => d.MagnitudeLetter);

onMounted(async () => {
	// @ts-ignore
	Plotly.newPlot(
		graph.value!,
		[
			{
				x: magnitudes,
				y: redshifts,
				z: magnitudeLetters,
				type: 'scatter3d',
				mode: 'markers',
				marker: {
					size: 3,
					symbol: 'circle',
				},
			},
		],
		{
			scene: {
				xaxis: {
					title: 'Magnitude',
				},
				yaxis: {
					title: 'Redshift',
				},
				zaxis: {
					title: 'Magnitude Wavelength',
				},
			},
		}
	);
});
</script>

<template>
	<div id="graph" ref="graph"></div>
</template>
