/**
 * Created by Thinking on 09/13/2016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);