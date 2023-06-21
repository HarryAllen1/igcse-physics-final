---
next:
  text: Individual Graphs
  link: ./graphs.md
---

<script setup>
import Graph from './Graph.vue';
</script>

# What is the correlation between galaxy magnitudes and their redshifts?

## Background Information

This project investigates the correlation between a galaxy's magnitude at varying wavelengths, and the redshift. A galaxy's magnitude is a measure of its brightness. However, a galaxy can emit more green light than, for example, red light. So, this means, since colour is determined by the frequency/wavelength of light waves (they are inversely proportional since the speed of light is constant at $3*10^{8} m/s$ and $v=f*\lambda$), there are different magnitudes depending on their wavelength.

## Procedure

I got the data from SDSS' data release 18. To get their data, I had to use their [SQL search tool](https://skyserver.sdss.org/dr18/SearchTools/sql) with the following query:

<<< ../query.sql

This query gets the top 5000 rows of data, but only gets the `psfMag_u`, `psfMag_g`, `psfMag_r`, `psfMag_i`, `psfMag_z`, and `z` columns. The columns starting with `psfMag` represent the magnitudes of different wavelengths of light, with `psfMag_u` representing ultraviolet light, `psfMag_g` representing green light, `psfMag_r` representing red light, `psfMag_i` representing near-infrared light (very intuitive), and `psfMag_z` representing infrared light. The `psf` stands for "Point Spread Function," and represents the amount of spread/blur appears on a light sensor from a single point.

## Data

Ideally, this would be a 3d graph but it looked really ugly and didn't work well when put onto this page.

You can see the individual, unlayered graphs on [this page](./graphs.md) or a graph with 50k rows [here](./graph-50k.md) (it takes about 10 seconds to load and often crashes Chrome).

<Graph />

The x-axis represents the magnitude using the "AB magnitude system" which is a [logarithmic scale representing the spectral flux density](https://en.wikipedia.org/wiki/AB_magnitude). It is unitless.
The y-axis represents the redshift. Since redshift is relative, it is also unitless.

## Analysis

The graph shows that as magnitude increases (or as the galaxy gets darker), the greater the redshift becomes (meaning that the galaxy is moving away from Earth, faster). Since a higher magnitude indicates a lower brightness, this makes sense as farther-away galaxies are more likely to be be moving faster due to Hubble's law, which states that galaxies move faster the farther away they are to Earth. This faster speed increases the light wavelength through the Doppler effect causing the galaxies redshift to increase, creating the (mostly) linear relationship shown in the graph.

This graph shows that as the wavelength increases, the more linear the relationship gets, as shown by the points in deep red (representing the infrared magnitudes). It also shows that, as the magnitude increases, the less linear the magnitude-redshift relationship gets.

As the magnitude passes around 20, the redshifts become more and more random (this is more visible in the [50k graph](./graph-50k.md)). This is most likely due to accuracy issues with the lack of brightness of the galaxies making it hard to create precise measurements.

Mostly in the near-infrared wavelength, there are some outliers, namely the ones with a redshift of ~22.8 (although there is a smaller group with a redshift of ~9 at lower magnitudes). This likely represents a galaxy cluster, since gravity would hold the galaxies together, making them move at the same speed, but their magnitudes could still vary.

In the infrared wavelength, as the magnitude passes ~21, there are a greater number of galaxies that don't seem to follow a linear relationship (this is much more visible in the [50k graph](./graph-50k.md)). Again, this can likely be attributed to an accuracy error as most galaxies still

## Conclusion
