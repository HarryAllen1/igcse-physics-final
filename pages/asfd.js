import data from './data.json' assert { type: 'json' };

export const actualData = [];
for (const { psfMag_u, psfMag_g, psfMag_i, psfMag_r, psfMag_z, z } of data[0]
	.Rows) {
	actualData.push(
		{
			Magnitude: psfMag_u,
			Redshift: z,
			MagnitudeLetter: 'u',
		},
		{
			Magnitude: psfMag_g,
			Redshift: z,
			MagnitudeLetter: 'g',
		},
		{
			Magnitude: psfMag_r,
			Redshift: z,
			MagnitudeLetter: 'r',
		},
		{
			Magnitude: psfMag_i,
			Redshift: z,
			MagnitudeLetter: 'i',
		},
		{
			Magnitude: psfMag_z,
			Redshift: z,
			MagnitudeLetter: 'z',
		}
	);
}

import { writeFile } from 'node:fs/promises';

await writeFile(
	'./data.csv',
	`Magnitude,Redshift,MagnitudeLetter
${actualData
	.map((d) => `${d.Magnitude},${d.Redshift},${d.MagnitudeLetter}`)
	.join('\n')}`
);
