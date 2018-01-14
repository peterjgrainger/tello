import {PublishingInformation} from './publishing-information';

export const skill = {
    skillManifest: {
      publishingInformation: {
        locales: {
          'en-UK': {
            "summary": PublishingInformation.SUMMARY,
            "examplePhrases": [
              `Alexa open ${PublishingInformation.APP_NAME}`,
              `Alexa launch ${PublishingInformation.APP_NAME}`,
              `Alexa start ${PublishingInformation.APP_NAME}`
            ],
            name: PublishingInformation.NAME,
            description: PublishingInformation.DESCRIPTION
          }
        },
        isAvailableWorldwide: true,
        testingInstructions: PublishingInformation.TESTING_INSTRUCTIONS,
        category: PublishingInformation.CATEGORY,
        distributionCountries: []
      },
      apis: {
        custom: {}
      },
      manifestVersion: "1.0"
    }
  }