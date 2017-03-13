import { Directive, ElementRef, Input, HostListener, Renderer, OnInit } from '@angular/core';
@Directive({
	selector:'[myNgShow]'
})
export class CustomDirective 
{
	
	constructor(private el: ElementRef, public renderer: Renderer)
	{

	}
	@Input('myNgShow') set myNgShow(condition: boolean) 
	{
		if (condition == true) {
			this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
		}
		else if (condition == false) {
			this.renderer.setElementStyle(this.el.nativeElement, 'display', 'unset');
		} 
	}
	
	
	
	private changeColor(color: string)
	{
		
	}
}