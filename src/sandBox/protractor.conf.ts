import {Config} from 'protractor';

export let config: Config = {
    directConnect: true,

    capabilities: {
        browserName: 'chrome'
    },

    specs: ['teste.spec.js']
}