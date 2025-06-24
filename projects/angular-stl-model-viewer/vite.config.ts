import angular from '@analogjs/vite-plugin-angular'
import { defaultClientConditions, defaultServerConditions, defineConfig } from 'vite'
import { mergeConfig, defineConfig as testConfig } from 'vitest/config'

export default mergeConfig(defineConfig({
  plugins: [
    angular({ tsconfig: 'projects/angular-stl-model-viewer/tsconfig.spec.json' }),
    {
      config: () => {
        return {
          resolve: { conditions: [...defaultClientConditions] },
          ssr: {
            resolve: {
              conditions: [...defaultServerConditions],
              externalConditions: [...defaultServerConditions]
            }
          }
        }
      },
      enforce: 'post',
      name: 'tslib-fix'
    }
  ]
}), testConfig({
  test: {
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      instances: [{
        browser: 'chromium'
      }]
    },
    reporters: process.env.GITHUB_ACTIONS
      ? [
          'dot',
          'github-actions'
        ]
      : ['dot'],
    globals: true,
    pool: 'threads',
    css: false,
    environment: 'jsdom',
    include: ['projects/angular-stl-model-viewer/**/*.spec.ts'],
    setupFiles: ['projects/angular-stl-model-viewer/test.ts'],
    deps: { optimizer: { web: { enabled: true } } }
  }
}))
