# AngularHandsOn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Bootstrap

`npm install bootstrap`

[Install](https://getbootstrap.com/docs/4.5/getting-started/download/#npm)

## fontawesome

`npm install @fortawesome/fontawesome-svg-core`

`npm install @fortawesome/free-solid-svg-icons`

`npm i @fortawesome/angular-fontawesome`

[instructions](https://github.com/FortAwesome/angular-fontawesome)

## forms

[putsreq - tools to test post](https://putsreq.com/8EaANchgi4aU0V704UOV/inspect)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### modules

`ng g m modules/admin --routing -m app.module`



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### FAQ

[No binary for Chrome browser on your platform](https://developerslogblog.wordpress.com/2019/03/19/how-to-fix-no-binary-for-chrome-browser-on-your-platform/)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Use webpack-bundle-analyzer

first install web pack analyzer

`npm i webpack-bundle-analyzer --save-dev`

you can generate the stats with the next command to generate the build

`ng build --prod --stats-json`

you can execute the stats with the next code

`npx webpack-bundle-analyzer dist/Angular-HandsOn/stats-es2015.json`

add this line in package.json in script block, to execute just with a commnd `stats`

`"stats": "npx webpack-bundle-analyzer dist/Angular-HandsOn/stats-es2015.json",`

run this code

`npm run stats`

[more info](https://www.digitalocean.com/community/tutorials/angular-bundle-size)

## update

`ng update`

`--dryRun`

`--all`

`--force`

[Tool](https://update.angular.io/)

## Create library

`ng build <app> --prod`

`cd dist/app`

`npm publish`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
