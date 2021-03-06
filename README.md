# Project structure

Each feature has it's own folder (home & login), 
other shared/common code such as services, models, 
helpers etc are placed in folders prefixed with an underscore 
_ to easily differentiate them and group them together at the 
top of the folder structure.
Path aliases @app and @environments have been configured in
 tsconfig.json that map to the /src/app and /src/environments directories.
  This allows imports to be relative to the app and environments folders 
  by prefixing import paths with aliases instead of having to use long 
  relative
 paths (e.g. `import MyComponent from '../../../MyComponent' `).
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
