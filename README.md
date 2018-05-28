# Puddletown JS standard environment

A simple starting point for developing modern javascript libraries. All included dependencies are `dev` only.

## Contains configurations and tools for:

-   **Unit testing/ BDD** - mocha/chai
-   **Code coverage** - NYC/Istanbul
-   **Documentation** - documentation - (using standard jsdoc block style)
-   **Bundling** - Rollup
-   **Standard JS Formatting** 

## Getting Started

```bash
git clone https://github.com/PuddletownDesign/js-env <your-project-name>

cd <your-project-name>

node i
```

## Building a library

This will build out all of the documentation, testing, code coverage and bundle the script with rollup. This does everything at once.

```bash
npm run build
```

### testing

This will run mocha and the nyc/Istanbul code coverage directory

```bash
npm run test
```

### Documentation

This will build the documentation.

```bash
npm run docs
```

### Cleaning all temp files

This will delete `bundle.js` as well as the `coverage` and `docs` directories.
