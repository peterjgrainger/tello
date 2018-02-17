import { ImageLinks } from "./image-links";

export function skill(url: string, userSetInfo, links: ImageLinks) {
    return {
      apis: {
        custom: {
          endpoint: {
            sslCertificateType: "Wildcard",
            uri: url,
          },
        },
      },
      manifest: {
      publishingInformation: {
        category: userSetInfo.CATEGORY,
        distributionCountries: [],
        isAvailableWorldwide: true,
        locales: {
          'en-GB': {
            description: userSetInfo.DESCRIPTION,
            examplePhrases: [
              `Alexa open ${userSetInfo.APP_NAME}`,
              `Alexa launch ${userSetInfo.APP_NAME}`,
              `Alexa start ${userSetInfo.APP_NAME}`,
            ],
            largeIconUri: links.big,
            name: userSetInfo.NAME,
            smallIconUri: links.small,
            summary: userSetInfo.SUMMARY,
          },
        },

        testingInstructions: userSetInfo.TESTING_INSTRUCTIONS,

      },
      manifestVersion: "1.0",
      privacyAndCompliance: {
        allowsPurchases: false,
        locales: {
          "en-GB": {
            termsOfUseUrl: "",
            privacyPolicyUrl: "",
          },
        },
        isExportCompliant: true,
        isChildDirected: false,
        usesPersonalInfo: false,
        containsAds: false,
      },
    },
  };
}
