/* Pollyfill should be always at the top.
To benefit the application with its features */

import '../pollyfill'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import AppModule from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule)