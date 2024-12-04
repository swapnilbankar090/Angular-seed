import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[myStyle]'
})
export class PracticedirectiveDirective implements AfterViewInit {
  @Input() inputAlign!: string;
  @Input() inputFontSize!: string;
  @Input() inputFontStyle!: string;
  @Input() inputTextDecoration!: string;
//Constructor -Dependency Injection - ElementRef object is injected
  constructor(private elRef: ElementRef) { }
  ngAfterViewInit(): void {
    //ElementRef object is used to access the DOM element to font property text
    
    this.elRef.nativeElement.style.align= this.inputAlign;
    this.elRef.nativeElement.style.fontSize = this.inputFontSize;
    this.elRef.nativeElement.fontStyle = this.inputFontStyle;
    this.elRef.nativeElement.style.textDecoration = this.inputTextDecoration;
  }
}
