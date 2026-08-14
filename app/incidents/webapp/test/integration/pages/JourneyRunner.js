sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/incidents/test/integration/pages/IncidentsList.gen",
	"ns/incidents/test/integration/pages/IncidentsObjectPage.gen",
	"ns/incidents/test/integration/pages/ConversationsObjectPage.gen"
], function (JourneyRunner, IncidentsListGenerated, IncidentsObjectPageGenerated, ConversationsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/incidents') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsListGenerated: IncidentsListGenerated,
			onTheIncidentsObjectPageGenerated: IncidentsObjectPageGenerated,
			onTheConversationsObjectPageGenerated: ConversationsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

