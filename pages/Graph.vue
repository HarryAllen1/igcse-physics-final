<script setup lang="ts">
import { dot, plot, ruleY } from '@observablehq/plot';
import { onMounted, ref } from 'vue';
import { actualData, mapMagToColour } from './data';

const graph = ref<HTMLDivElement | null>(null);

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
			dot(actualData, {
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
			}),
		],
	});
	graph.value?.append(actualPlot);
});
</script>

<template>
	<div class="swatch-wrapper">
		<span>
			<svg width="15" height="15" fill="#9803fc">
				<rect width="100%" height="100%"></rect>
			</svg>
			u
		</span>
		<span>
			<svg width="15" height="15" fill="#03fc39">
				<rect width="100%" height="100%"></rect>
			</svg>
			g
		</span>
		<span>
			<svg width="15" height="15" fill="#eb4034">
				<rect width="100%" height="100%"></rect>
			</svg>
			r
		</span>
		<span>
			<svg width="15" height="15" fill="#f79307">
				<rect width="100%" height="100%"></rect>
			</svg>
			i
		</span>
		<span>
			<svg width="15" height="15" fill="#820f07">
				<rect width="100%" height="100%"></rect>
			</svg>
			z
		</span>
	</div>
	<div ref="graph"></div>
</template>

<style>
svg {
	background: none !important;
}
:root [aria-label='tip'][fill='white'],
:root [aria-label='tip'] [fill='white'] {
	fill: var(--vp-c-bg-alt);
}
.swatch-wrapper {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.swatch-wrapper > span {
	display: inline-flex;
	align-items: center;
	margin-right: 1em;
	font-family: system-ui, sans-serif;
	font-size: 10px;
	margin-bottom: 0.5em;
}
.swatch-wrapper > span > svg {
	margin-right: 0.5em;
	overflow: visible;
}
</style>
