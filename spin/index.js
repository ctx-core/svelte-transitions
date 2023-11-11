import { elasticOut } from 'svelte/easing'
/**
 * @param {HTMLElement}_
 * @param {import('./index.d.ts').spin__params_T}params
 * @returns {import('./index.d.ts').spin__ret_T}
 */
export function spin(_, params) {
	const { duration } = params
	return {
		duration,
		css: t=>{
			const eased = elasticOut(t)
			return `
				transform: scale(${eased}) rotate(${eased * 1080}deg);
				color: hsl(
					${~~(t * 360)},
					${Math.min(100, 1000 - 1000 * t)}%,
					${Math.min(50, 500 - 500 * t)}%
				);`
		}
	}
}
