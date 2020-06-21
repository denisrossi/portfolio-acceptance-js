const
	{ ArtifactArchiver } = require('@serenity-js/core'),
	{ ConsoleReporter } = require('@serenity-js/console-reporter'),
	{ Photographer, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
	{ SerenityBDDReporter } = require('@serenity-js/serenity-bdd');

exports.config = {
	logLevel: "DEBUG",
    SELENIUM_PROMISE_MANAGER: false,

	seleniumAddress: 'http://localhost:4444/wd/hub',

    allScriptsTimeout: 11000,

    specs: [ "features/**/*.feature"],

	// Tell Protractor to use the Serenity/JS framework Protractor Adapter
	framework: "custom",
	frameworkPath: require.resolve("@serenity-js/protractor/adapter"),

	// Configure Serenity/JS to use an appropriate test runner
	// and the Stage Crew Members we've imported at the top of this file
	serenity: {
		crew: [
			ArtifactArchiver.storingArtifactsAt("./build/site/serenity"),
			ConsoleReporter.forDarkTerminals(),
			Photographer.whoWill(TakePhotosOfInteractions),
			new SerenityBDDReporter()
		]
	},

	cucumberOpts: {
        require: [
            "features/step_definitions/**/*.ts",
            "features/support/setup.ts"
        ],
        "require-module": ["ts-node/register"]
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1024x768',
                '--headless',
            ]
        }
    }
};