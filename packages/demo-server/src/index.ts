import { DemoServerApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { AngularClientPath } from '@nw/demo-angular';

export { DemoServerApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new DemoServerApplication(options);
  console.log(AngularClientPath);
  app.static('/app', AngularClientPath);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
