import { elasticOut } from 'svelte/easing'
export function whoosh(node:HTMLElement, params:whoosh_params_I) {
	const existingTransform =
		window.getComputedStyle(node).transform.replace('none', '')
	return {
		delay: params.delay || 0,
		duration: params.duration || 400,
		easing: params.easing || elasticOut,
		css: (t:string, _:any)=>`transform: ${existingTransform} scale(${t})`
	}
}
export interface whoosh_params_I {
	delay?:number
	duration?:number
	easing?:number
}
