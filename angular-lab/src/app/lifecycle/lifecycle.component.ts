import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>Lifecycle Hooks Example</p>'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }
}
