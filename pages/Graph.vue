<script setup lang="ts">
import { dot, frame, plot } from '@observablehq/plot';
import data from './data.json';
import { ref, onMounted } from 'vue';

const graph = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const actualPlot = plot({
    grid: true,
    inset: 10,
    color: {
      legend: true,
    },
    marks: [frame(), dot(data, { x: 'x', y: 'Redshift', stroke: 'type' })],
  });
  graph.value?.append(actualPlot);
});
</script>

<template>
  <div ref="graph"></div>
</template>

<style>
svg {
  background: none !important;
}
</style>
