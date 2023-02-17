import { elasticOut } from 'svelte/easing'
/**
 * @param node{HTMLElement}
 * @param params{import('./index.d.ts').whoosh__params_T}
 * @returns {import('./index.d.ts').whoosh__ret_T}
 */
export function whoosh(node, params) {
	const existingTransform =
		window
			.getComputedStyle(node)
			.transform
			.replace('none', '')
	return {
		delay: params.delay || 0,
		duration: params.duration || 400,
		easing: params.easing || elasticOut,
		css: (t, _)=>`transform: ${existingTransform} scale(${t})`
	}
}
