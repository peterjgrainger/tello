import { ImageLinks } from "./image-links";

export function skill(url: string, userSetInfo, links: ImageLinks) {
    return {
      skillManifest: {
      publishingInformation: {
        locales: {
          'en-GB': {
            summary: userSetInfo.SUMMARY,
            examplePhrases: [
              `Alexa open ${userSetInfo.APP_NAME}`,
              `Alexa launch ${userSetInfo.APP_NAME}`,
              `Alexa start ${userSetInfo.APP_NAME}`
            ],
            name: userSetInfo.NAME,
            description: userSetInfo.DESCRIPTION,
            smallIconUri: links.small,
            largeIconUri: links.big,
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
      manifestVersion: "1.0",
      privacyAndCompliance: {
        allowsPurchases: false,
        locales: {
          "en-GB": {
            termsOfUseUrl: "",
            privacyPolicyUrl: ""
          }
        },
        isExportCompliant: true,
        isChildDirected: false,
        usesPersonalInfo: false,
        containsAds: false
      }
    }
  }
}