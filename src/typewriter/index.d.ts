export declare function typewriter(
	node:HTMLElement, params:typewriter__params_T
):typewriter__ret_T
export interface typewriter__params_T {
	speed?:number|undefined
}
export interface typewriter__ret_T {
	duration:number
	tick:(t:number)=>void
}
