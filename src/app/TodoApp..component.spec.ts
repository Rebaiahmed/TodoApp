/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TodoComponent } from './TodoApp.component';

beforeEachProviders(() => [TodoComponent]);

describe('App: Angular2TodoApp', () => {
  it('should create the app',
      inject([TodoComponent], (app: TodoComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([TodoComponent], (app: TodoComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
