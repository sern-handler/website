# Good to know

## sern.config.json
A sern.config.json, although not necessary, allows your project to communicate with our cli.
For example, when installing typescript plugins, the language property is necessary to install from our
[open source repository](https://github.com/sern-handler/awesome-plugins).
Using the cli and running `sern init --sync` on pre-existing projects should install this json file in the root directory given.
Or, if this is a brand-new project, `sern init` automatically installs it.

```json
{
  "language": "typescript",
  "paths": {
    "base": "src",
    "commands": "commands"
  }
}
```