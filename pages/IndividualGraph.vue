<script setup lang="ts">
import { dot, plot, ruleY } from '@observablehq/plot';
import { onMounted, ref } from 'vue';
import { MagnitudeLetter, actualData, mapMagToColour } from './data';

const graph = ref<HTMLDivElement | null>(null);

const props = defineProps<{
	magnitudeWavelength: MagnitudeLetter;
}>();

onMounted(async () => {
	const actualPlot = plot({
		grid: true,
		inset: 10,
		color: {
			legend: true,
			label: 'Magnitude wavelength',
			range: ['#9803fc', '#03fc39', '#eb4034', '#f79307', '#820f07'],
		},
		marks: [
			ruleY([0]),
			dot(
				actualData.filter(
					(d) => d.MagnitudeLetter === props.magnitudeWavelength
				),
				{
					x: 'Magnitude',
					y: 'Redshift',
					fill: mapMagToColour,
					sort: (a: (typeof actualData)[0], b: (typeof actualData)[0]) => {
						const preferredOrder = ['u', 'g', 'r', 'i', 'z'];
						return (
							preferredOrder.indexOf(a.MagnitudeLetter) -
							preferredOrder.indexOf(b.MagnitudeLetter)
						);
					},
					tip: true,
				}
			),
		],
	});
	graph.value?.append(actualPlot);
});
</script>

<template>
	<div ref="graph"></div>
</template>
