import { elasticOut } from 'svelte/easing'
export declare function whoosh(
	node:HTMLElement, params:whoosh__params_T
):whoosh__ret_T
export interface whoosh__params_T {
	delay?:number
	duration?:number
	easing?:number
}
export declare type whoosh_params_I = whoosh__params_T
export interface whoosh__ret_T {
	delay:number
	duration:number
	easing:number|typeof elasticOut
	css:(t:string, _:any)=>string
}
