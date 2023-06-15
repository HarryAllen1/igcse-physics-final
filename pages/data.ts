import data from './data.json';
type MagnitudeLetter = 'u' | 'g' | 'r' | 'i' | 'z';

export const actualData: {
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

export const mapMagToColour = (i: { MagnitudeLetter: string }) => {
	switch (i.MagnitudeLetter) {
		case 'u':
			return '#9803fc';
		case 'g':
			return '#03fc39';
		case 'r':
			return '#eb4034';
		case 'i':
			return '#f79307';
		case 'z':
			return '#820f07';

		default:
			break;
	}
};
