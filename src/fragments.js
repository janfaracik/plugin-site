import {graphql} from 'gatsby';

export const PluginFragment = graphql`
  fragment JenkinsPluginFragment on JenkinsPlugin {
    id
    gav
    hasBomEntry
    title
    url
    version
    wiki {
      childMarkdownRemark {
          html
      }
      url
    }
    stats {
      currentInstalls
      installations {
          timestamp
          total
      }
      trend
    }
    sha1
    deprecationNotice
    securityWarnings {
      active
      id
      message
      url
      versions {
        firstVersion
        lastVersion
      }
    }
    issueTrackers {
      reportUrl
      viewUrl
    }
    scm
    hasPipelineSteps
    requiredCore
    releaseTimestamp
    previousVersion
    previousTimestamp
    name
    labels
    developers {
      id
      name
    }
    firstRelease
    excerpt
    buildDate
    dependencies {
      implied
      name
      optional
      title
      version
    }
  }
`;
