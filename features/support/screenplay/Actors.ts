import { Actor, Cast } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor';

protractor.browser.waitForAngularEnabled(false);

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(BrowseTheWeb.using(protractor.browser));
    }
}