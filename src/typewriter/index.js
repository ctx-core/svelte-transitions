/**
 * @param node{HTMLElement}
 * @param params{import('./index.d.ts').typewriter__params_T}
 * @returns {import('./index.d.ts').typewriter__ret_T}
 */
export function typewriter(node, params) {
	const { speed = 50 } = params
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === 3
	if (!valid) {
		throw new Error(
			`This transition only works on elements with a single text node child`)
	}
	const text = node.textContent
	const length = text.length || 0
	const duration = length * speed
	return {
		duration,
		tick: (t)=>{
			const i = ~~(length * t)
			node.textContent = text.slice(0, i)
		}
	}
}
