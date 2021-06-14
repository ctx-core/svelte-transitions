import { elasticOut } from 'svelte/easing';
export function whoosh(node, params) {
    const existingTransform = window.getComputedStyle(node).transform.replace('none', '');
    return {
        delay: params.delay || 0,
        duration: params.duration || 400,
        easing: params.easing || elasticOut,
        css: (t, _) => `transform: ${existingTransform} scale(${t})`
    };
}
//# sourceMappingURL=src/whoosh.js.map