import { When, Then } from "cucumber";
import { Actor, actorInTheSpotlight, actorCalled } from "@serenity-js/core";
import { Navigate, Website, Text } from "@serenity-js/protractor";
import { Ensure, includes, isGreaterThan, property, contain, equals } from "@serenity-js/assertions";
import { TargetElements, Target } from "@serenity-js/protractor/lib/screenplay/questions/targets";
import { by, ElementArrayFinder } from "protractor";

class ProjectPage {
	static articles = Target.all("articles").located(by.css("article"));
}

When(/^(.+) navigates to (.+)$/, (actorName: string, url: string) => {
	return actor(actorName).attemptsTo(Navigate.to(url));
});

Then(/^(.+) should see the portfolio home page$/, (actorName: string) => {
	return actor(actorName).attemptsTo(Ensure.that(Website.title(), includes("Denis Rossi")));
});

Then(/^(.+) should see at least (\d+) (.+)$/, (actorName: string, numEntries: number, typeEntry: string) => {
	return actor(actorName).attemptsTo(
		Ensure.that(
			Text.ofAll(Target.all("articles").located(by.css(`${typeEntry} * a`))),
			property<Array<string>, "length">("length", equals(numEntries))
		)
	);
});

function actor(actorName: string): Actor {
	return !isPronoun(actorName) ? actorCalled(actorName) : actorInTheSpotlight();
}

function isPronoun(actorName: string) {
	return !!~['they'].indexOf(actorName);
}