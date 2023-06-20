<script setup>
import Graph from './Graph.vue';
</script>

# What is the correlation between galaxy magnitudes and their redshifts?

[[toc]]

## Background Information

This project investigates the correlation between a galaxy's magnitude at varying wavelengths, and the redshift. A galaxy's magnitude is a measure of its brightness. However, a galaxy can emit more green light than, for example, red light. So, this means, since colour is determined by the frequency/wavelength of light waves (they are inversely proportional since the speed of light is constant at $3 * 10^{8} m/s$ and $v=f * \lambda$)

## Procedure

I got the data from SDSS' data release 18. To get their data, I had to use their [SQL search tool](https://skyserver.sdss.org/dr18/SearchTools/sql)

<<< ../query.sql

## Data

<Graph />

## Analysis

## Conclusion
