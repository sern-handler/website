```sh
Usage: sern build [options]

Build your bot

Options:
  -f --format [fmt]        The module system of your application. `cjs` or `esm` (default: "esm")
  -m --mode [mode]         the mode for sern to build in. `production` or `development` (default: "development")
  -W --suppress-warnings   suppress experimental warning
  -p --project [filePath]  build with this sern.build file
  -h, --help               display help for command
```

## Guiding Principles

When designing the `sern build` command, our aim was to make building bot applications as simple as possible for the majority of developers. The setup process has been streamlined, and most of the configuration details have been handled for you. Here are some key points to keep in mind:

1. **Minimal Configuration**: In the vast majority (99%) of use cases, developers do not need to configure the bot application building process. We believe that simplicity is key, so only a few decisions need to be made on the developer's end.

2. **Optimal Defaults**: To make your experience smooth and hassle-free, we've chosen sensible default settings. This means that you can get started quickly without getting bogged down by complex, often unneeded configurations.

3. **Finetuned for production bots**: Our CLI leverages an opinionated build solution powered by esbuild. This ensures that the bot application is built without issues and the output created can be shipped easily.

## Experimental Features

Both the `sern build` and `sern publish` commands are marked as experimental. While they might not be completely stable, they are designed to work for the majority of users. We appreciate your feedback in helping us make these features even better.

## Features

The `sern build` command comes equipped with a range of features designed to enhance your development process. Here's a glimpse of what it offers:

- **esbuild Integration**: our CLI takes inspiration from the efficiency of SvelteKit, ensuring your bot application is built swiftly and effectivelywith esbuild.

- **Zero Configuration**: You can start building your bot application without any additional configuration. The CLI handles most of the setup for you.

- **Experimental Image Support**: We've introduced experimental support for top-level imports of PNG and JPG files, making it easier to include images in your bot application.

- **Compile Time Constants**: Customize your build with compile-time constants, allowing you to tailor your application to different environments.

- **Development and Production Modes**: The CLI supports both development and production modes, enabling you to tailor your bot application for different stages of development.

- **Access to Plugins Ecosystem**: Harness the power of the esbuild plugins ecosystem to extend the functionality of your build process.

- **Type-safe `process.env`**: The CLI ensures that the `process.env` variables are type-safe, promoting better coding practices and reducing potential errors.
## Implicits 
- command line arguments take precendence over sern.build configuration file
- default build format is ESM
- defineVersion = true
- __DEV__ AND __PROD__ constants are configured. 
- only a [few tsconfig options](https://esbuild.github.io/content-types/#tsconfig-json) are respected.
### sern.build.js
- For any extra configuration you may need
- the cli was intentionally made to be installed globally, and we can't provide typings at a project level. If you need typings, here they are:
```
type BuildOptions = {
    /**
      * Define __VERSION__
      * This option is a quick switch to defining the __VERSION__ constant which will be a string of the version provided in 
      * cwd's package.json
      */
    defineVersion?: boolean 
    /**
      * default = esm
      */
    format?: 'cjs' | 'esm'
    /** 
      * extra esbuild plugins to build with sern.
      */
    esbuildPlugins?: esbuild.Plugin[]
    /**
     * https://esbuild.github.io/api/#drop-labels
     **/
    dropLabels?: string[]
    /**
     * https://esbuild.github.io/api/#define
     **/
    define?: Record<string, string>

    tsconfig?: string;
    /**
      * default = 'development'
      */
    mode: 'production' | 'development',
    /**
      * will search for env file. If none exists, 
      * default to .env.
      */
    env?: string
}
```
