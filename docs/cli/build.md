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

2. **Optimal Defaults**: We've chosen sensible defaults. This means you can get started without getting bogged down by complex, unneeded configurations.

3. **Finetuned for production bots**: Our CLI leverages an opinionated build solution powered by esbuild. This ensures that bots are built without issues and can be shipped easily.

## Experimental Features

Both the `sern build` and `sern publish` commands are marked as experimental. While they might not be completely stable, they are designed to work for the majority of users. We appreciate any feedback in helping us make these features even better.

## Features

The `sern build` command comes equipped with a range of features designed to enhance your development process. Here's a glimpse of what it offers:

- **esbuild Integration**: our CLI takes inspiration from the efficiency of SvelteKit, ensuring your bot application is built effectively and with type safety. Leverage the [esbuild plugin ecosystem](https://github.com/esbuild/community-plugins).

- **Zero Configuration**: Building your bot application without additional configuration. The CLI handles most of the setup for you.

- **Experimental Image Support**: We've introduced experimental support for top-level imports of PNG and JPG files, making it easier to include images in your bot application.

- **Compile Time Constants**: Customize your build with constants such as \_\_DEV\_\_, \_\_PROD\_\_, allowing you to tailor your application to different production stages.

- **Development and Production Modes**: The CLI supports both development and production modes, enabling you to tailor your bot application for different stages of development.


- **Type-safe `process.env`**: The CLI generates a type-safe `process.env`, reducing potential errors.
## Implicits 
- command line arguments take precendence over sern.build configuration file
- default build format is ESM
- defineVersion = true
- __DEV__ AND __PROD__ constants are configured. 
- only a [few tsconfig options](https://esbuild.github.io/content-types/#tsconfig-json) are respected.
### sern.build.js
- For any extra configuration you may need
- the cli was intentionally made to be installed globally, and we can't provide typings at a project level. If you need typings, here they are:
```ts
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
    /** 
    * Path to tsconfig
    **/
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

## Usage 
```
sern build
```
(that was easy)

## Adapting older projects 
- Change your tsconfig.json to extend our generated one. 

```json
{ 
    // highlight-start
    "extends": "./.sern/tsconfig.json",
    // highlight-end
    "compilerOptions" : {
        //all of your old fields  
    }
}
```
## In depth
We use the `define` and `drop labels` api in C style macros to have easy development stage differences. 
[Here](https://esbuild.github.io/api/#drop-labels) is the esbuild full API documentation
### drop labels

```sh 
# mode is set to production
sern build
```


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="input" label="Input">

```ts
__DEV__: console.log('This is for production only')
__PROD__: console.log('This is for either mode')
```

</TabItem>

<TabItem value="sh" label="Running build for production">

```sh 
# mode is set to production
sern build
```

</TabItem>


<TabItem value="output" label="Output">

```ts 
__PROD__ console.log('This is for either mode')
```

</TabItem>

</Tabs>

### constants 
sern builds with three default constants. \_\_DEV\_\_, \_\_PROD\_\_, \_\_VERSION\_\_. 

<Tabs>

<TabItem value="input" label="Preprocess">

```sh
sern build
```

</TabItem>

<TabItem value="sh" label="Constants available and typesafe!">

```ts 
if(__PROD__) {
    console.log('Bot version: ' + __VERSION__)
}
```

</TabItem>

</Tabs>

Full esbuild documentation [here](https://esbuild.github.io/api/#define)
Add more to the `define` field in build options (only availible with a `sern.build` file at the moment.

### process.env
We generate your process.env with `dotenv` and generate typings for process.env. Less hassle!

<Tabs>

<TabItem value="input" label=".env">

```sh
DISCORD_TOKEN=<your token>
```
```ts 
process.env.DISCORD_TOKEN // string | undefined (not typesafe :()
```

</TabItem>

<TabItem value="sh" label="sern build">

```sh 
sern build
```
```ts 
process.env.DISCORD_TOKEN // string  (typesafe :))
```

</TabItem>

</Tabs>
