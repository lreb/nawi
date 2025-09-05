# WebClient

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Folder Roles

core/ → app-wide services, guards, interceptors, singletons (loaded once).

shared/ → reusable components, directives, pipes used across features.

features/ → business logic modules (auth, dashboard, users, etc). Keeps code modular.

assets/ → images, icons, localization files.

theme/ → global styling, SCSS variables, Tailwind setup.

environments/ → separate configs for dev, prod, staging.


7️⃣ Resumen de buenas prácticas
Práctica	Beneficio
CoreModule solo en AppModule	Evita múltiples instancias de servicios singleton
SharedModule exportando reusable	Centraliza componentes reutilizables
Feature modules separados	Claridad y escalabilidad
Lazy loading	Reduce bundle inicial y acelera carga
Standalone components	Simplifica módulos pequeños y microfeatures
Signal-based services	Manejo de estado más eficiente y predecible
Nombres claros y consistentes	Facilita mantenimiento y colaboración
