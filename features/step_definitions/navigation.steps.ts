import { When, Then } from "cucumber";
import { Actor, actorInTheSpotlight, actorCalled } from "@serenity-js/core";
import { Navigate, Website } from "@serenity-js/protractor";
import { Ensure, includes } from "@serenity-js/assertions";

When(/^(.+) navigates to (.+)$/, (actorName: string, url: string) => {
	return actor(actorName).attemptsTo(Navigate.to(url));
});

Then(/^(.+) should see the portfolio home page$/, (actorName: string) => {
	return actor(actorName).attemptsTo(Ensure.that(Website.title(), includes("Denis Rossi")));
});

function actor(actorName: string): Actor {
	return !isPronoun(actorName) ? actorCalled(actorName) : actorInTheSpotlight();
}

function isPronoun(actorName: string) {
    return !!~ ['they'].indexOf(actorName);
}