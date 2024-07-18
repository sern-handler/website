import { defineEcConfig } from '@astrojs/starlight/expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: false,
    overridesByLang: {
      'js,javascript,typescript,ts,json': {
        showLineNumbers: true,
      },
    },
  },
});