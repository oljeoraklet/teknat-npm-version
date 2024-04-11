import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const spex = await fetch('/json/spex.json').then((r) => r.json());
	return {
            spex,
	};
};