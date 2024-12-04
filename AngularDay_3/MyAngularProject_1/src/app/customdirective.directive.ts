import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[myColor]'
})
export class CustomdirectiveDirective implements AfterViewInit {
  @Input() inputColor!: string;
//Constructor -Dependency Injection - ElementRef object is injected
  constructor(private elRef: ElementRef) { }
  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.inputColor;
  }

}
