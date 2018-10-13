import { get } from '@loopback/openapi-v3';
import * as fs from 'fs';
import * as path from 'path';
import { inject } from '@loopback/context';
import { RestBindings, Response } from '@loopback/rest';
import { AngularClientPath } from '@nw/demo-angular';

export class HomePageController {
  private html: string;
  constructor(@inject(RestBindings.Http.RESPONSE) private response: Response) {
    console.log(AngularClientPath);
    this.html = fs.readFileSync(AngularClientPath, 'utf-8');
  }

  @get('/', {
    responses: {
      '200': {
        description: 'Home Page',
        content: { 'text/html': { schema: { type: 'string' } } },
      },
    },
  })
  homePage() {
    this.response
      .status(200)
      .contentType('html')
      .send(this.html);
    return this.response;
  }
}
