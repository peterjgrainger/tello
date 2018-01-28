export function skill(url: string, userSetInfo ) {
    return {
      skillManifest: {
      publishingInformation: {
        locales: {
          'en-GB': {
            "summary": userSetInfo.SUMMARY,
            "examplePhrases": [
              `Alexa open ${userSetInfo.APP_NAME}`,
              `Alexa launch ${userSetInfo.APP_NAME}`,
              `Alexa start ${userSetInfo.APP_NAME}`
            ],
            name: userSetInfo.NAME,
            description: userSetInfo.DESCRIPTION
          }
        },
        isAvailableWorldwide: true,
        testingInstructions: userSetInfo.TESTING_INSTRUCTIONS,
        category: userSetInfo.CATEGORY,
        distributionCountries: []
      },
      apis: {
        custom: {
          endpoint: {
            sslCertificateType: "Wildcard",
            uri: url
          }
        }
      },
      manifestVersion: "1.0"
    }
  }
}