import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	<br>
	<div>
  <input type="radio" name="colors" [value]=true (click)="vars=true">Hide<br>
  <input type="radio" name="colors" [value]=false (click)="vars=false">Display
  Value:{{vars}}
</div><br><br>
	<h2 [myNgShow]=vars>Hey Assignment 11.2</h2>`,
	
})

export class AppComponent{
	
	vars: boolean = false;
	
	constructor()
	{
		
	}
}
