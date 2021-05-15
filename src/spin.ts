import { elasticOut } from 'svelte/easing'
export function spin(_:HTMLElement, { duration }:spin_params_I) {
	return {
		duration,
		css: (t:number)=>{
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
export interface spin_params_I {
	duration:number
}
