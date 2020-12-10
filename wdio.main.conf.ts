const appStorageCapability = {
    "browserName": "chrome",
    "platform": "macOS 10.15",
    "version": "latest",
    prerun: "storage:filename=echo.sh"
}
const sauceStorageCapability = {
    "browserName": "chrome",
    "platform": "macOS 10.15",
    "version": "latest",
    prerun: "sauce-storage:echo.sh"
}

const config: WebdriverIO.Config  = {

    runner: 'local',
    automationProtocol: 'webdriver',

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    
    
    specs: [
        './tests/*.ts'
    ],

    maxInstances: 20,
    capabilities: [sauceStorageCapability, appStorageCapability],
    logLevel: 'debug',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: ['sauce'],
    framework: 'mocha',
    reporters: [
        'spec',
    ],

    mochaOpts: {
        timeout: 400000,
        compilers: ['ts:ts-node/register'], 
    },

}

export { config }