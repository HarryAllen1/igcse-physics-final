<script setup>
import Graph from './Graph.vue';
</script>

# What is the correlation between galaxy magnitudes and their redshifts?

## Background Information

This project investigates the correlation between a galaxy's magnitude at varying wavelengths, and the redshift. A galaxy's magnitude is a measure of its brightness. However, a galaxy can emit more green light than, for example, red light. So, this means, since colour is determined by the frequency/wavelength of light waves (they are inversely proportional since the speed of light is constant at $3*10^{8} m/s$ and $v=f*\lambda$), there are different magnitudes depending on their wavelength.

## Procedure

I got the data from SDSS' data release 18. To get their data, I had to use their [SQL search tool](https://skyserver.sdss.org/dr18/SearchTools/sql) with the following query:

<<< ../query.sql

This query gets the top 5000 rows of data (a graph with 50k rows is [here](./graph-50k.md), although it is very laggy), but only gets the `psfMag_u`, `psfMag_g`, `psfMag_r`, `psfMag_i`, `psfMag_z`, and `z` columns. The columns starting with `psfMag` represent the magnitudes of different wavelengths of light, with `psfMag_u` representing ultraviolet light, `psfMag_g` representing green light, `psfMag_r` representing red light, `psfMag_i` representing near-infrared light (very intuitive), and `psfMag_z` representing infrared light. The `psf` stands for "Point Spread Function," and represents the amount of spread/blur appears on a light sensor from a single point.

## Data

Ideally, this would be a 3d graph but it looked really ugly and didn't work well when put onto this page.

You can see the individual, unlayered graphs on [this page](./graphs.md).

<Graph />

## Analysis

The graph shows that as magnitude increases (or as the galaxy gets darker), the greater the redshift becomes (meaning that the galaxy is moving away from Earth, faster).
This graph shows that as the wavelength increases, the more linear the relationship gets, as shown by the points in deep red (representing the infrared magnitudes). It also shows that, as the magnitude increases, the less linear the magnitude-redshift relationship gets. Furthermore, since the other wavelengths still show some form of trend, as

## Conclusion
