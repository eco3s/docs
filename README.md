# Eco3s API Docs

This documentation is built using [Docusaurus 2](https://docusaurus.io/), a SSG documentation framework made by facebook.

## Usage

### Installation

```sh
$ git clone http://github.com/eco3s/docs
$ cd docs
$ pnpm install
```

### Local Development

```sh
$ pnpm start
```

This will runs a local development server and opens up a browser window. Most changes are reflected live without having to restart your server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory under the root and can be served using any static contents hosting service.

### Deployment

We use the GitHub pages feature to host the static artifacts, and the build process will be executed via GitHub Action.

simply push new commits to the repository and wait for a few minutes until the deploy action finishes.

## License

![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)
