<script setup lang="ts">
import { dot, plot, ruleY } from "@observablehq/plot";
import { onMounted, ref } from "vue";
import data from "./data.json";

const graph = ref<HTMLDivElement | null>(null);

type MagnitudeLetter = "u" | "g" | "r" | "i" | "z";

const actualData: {
  Magnitude: number;
  Redshift: number;
  MagnitudeLetter: MagnitudeLetter;
}[] = [];
for (const { psfMag_u, psfMag_g, psfMag_i, psfMag_r, psfMag_z, z } of data[0]
  .Rows as {
  psfMag_u: number;
  psfMag_g: number;
  psfMag_r: number;
  psfMag_i: number;
  psfMag_z: number;
  z: number;
}[]) {
  actualData.push(
    {
      Magnitude: psfMag_u,
      Redshift: z,
      MagnitudeLetter: "u",
    },
    {
      Magnitude: psfMag_g,
      Redshift: z,
      MagnitudeLetter: "g",
    },
    {
      Magnitude: psfMag_r,
      Redshift: z,
      MagnitudeLetter: "r",
    },
    {
      Magnitude: psfMag_i,
      Redshift: z,
      MagnitudeLetter: "i",
    },
    {
      Magnitude: psfMag_z,
      Redshift: z,
      MagnitudeLetter: "z",
    }
  );
}
onMounted(() => {
  const actualPlot = plot({
    grid: true,
    inset: 10,
    color: {
      legend: true,
    },
    marks: [
      ruleY([0]),
      dot(actualData, {
        x: "Magnitude",
        y: "Redshift",
        fill: "MagnitudeLetter",
        tip: true,
      }),
    ],
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
