import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver, configure } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';

import { setDefaultTimeout } from 'cucumber';
import { Actors } from './screenplay';
import { Photographer, TakePhotosBeforeAndAfterInteractions } from '@serenity-js/protractor';

configure({
    actors: new Actors(),
    crew: [
        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
		Photographer.whoWill(TakePhotosBeforeAndAfterInteractions),
        new SerenityBDDReporter(),
        ConsoleReporter.forDarkTerminals(),
    ],
});

setDefaultTimeout(30 * 1000);