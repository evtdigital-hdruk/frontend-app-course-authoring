import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Select a discussion tool for this course',
  },
  supportedFeatures: {
    id: 'authoring.discussions.supportedFeatures',
    defaultMessage: 'Supported Features',
  },
  'supportedFeatureList-mobile-show': {
    id: 'authoring.discussions.supportedFeatureList-mobile-show',
    defaultMessage: 'Show supported features',
    description: 'This is used in mobile view as supported feature list heading when close',
  },
  'supportedFeatureList-mobile-hide': {
    id: 'authoring.discussions.supportedFeatureList-mobile-hide',
    defaultMessage: 'Hide supported features',
    description: 'This is used in mobile view as supported feature list heading when opened',
  },
  noApps: {
    id: 'authoring.discussions.noApps',
    defaultMessage: 'There are no discussions providers available for your course.',
    description: 'A message shown when there are no discussions providers available to be displayed.',
  },
  nextButton: {
    id: 'authoring.discussions.nextButton',
    defaultMessage: 'Next',
    description: 'Button allowing the user to advance to the second step of discussion configuration.',
  },
  appFullSupport: {
    id: 'authoring.discussions.appFullSupport',
    defaultMessage: 'Full support',
    description: 'A label indicating that an app supports the full set of possible features for a discussions app.',
  },
  appPartialSupport: {
    id: 'authoring.discussions.appPartialSupport',
    defaultMessage: 'Partial support',
    description: 'A label indicating that an app only supports a subset of the possible features of a discussions app.',
  },
  selectApp: {
    id: 'authoring.discussions.selectApp',
    defaultMessage: 'Select {appName}',
    description: 'A label for the checkbox that allows a user to select the discussions app they want to configure.',
  },

  // Legacy
  'appName-legacy': {
    id: 'authoring.discussions.appList.appName-legacy',
    defaultMessage: 'edX Discussions',
    description: 'The name of the Legacy edX Discussions app.',
  },
  'appDescription-legacy': {
    id: 'authoring.discussions.appList.appDescription-legacy',
    defaultMessage: 'Start conversations with other learners, ask questions, and interact with other learners in the course.',
    description: 'A description of the Legacy edX Discussions app.',
  },
  // Piazza
  'appName-piazza': {
    id: 'authoring.discussions.appList.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'The name of the Piazza app.',
  },
  'appDescription-piazza': {
    id: 'authoring.discussions.appList.appDescription-piazza',
    defaultMessage: 'Piazza is designed to connect students, TAs, and professors so every student can get the help they need when they need it.',
    description: 'A description of the Piazza app.',
  },

  // edX Next
  'appName-edx-next': {
    id: 'authoring.discussions.appList.appName-edx-next',
    defaultMessage: 'edX Next',
    description: 'The name of the edX Next app.',
  },
  'appDescription-edx-next': {
    id: 'authoring.discussions.appList.appDescription-edx-next',
    // @todo update default message for edx-next
    defaultMessage: 'edX Next',
    description: 'A description of the edx next app.',
  },

  // yellowdig
  'appName-yellowdig': {
    id: 'authoring.discussions.appList.appName-yellowdig',
    defaultMessage: 'Yellowdig',
    description: 'The name of the yellowdig app.',
  },
  'appDescription-yellowdig': {
    id: 'authoring.discussions.appList.appDescription-yellowdig',
    defaultMessage: 'Yellowdig offers educators a gameful learning digital solution to improve student engagement by building learning communities for any course modality.',
    description: 'A description of the Yellowdig app.',
  },
  // edX inscribe
  'appName-inscribe': {
    id: 'authoring.discussions.appList.appName-inscribe',
    defaultMessage: 'Inscribe',
    description: 'The name of the inscribe app.',
  },
  'appDescription-inscribe': {
    id: 'authoring.discussions.appList.appDescription-inscribe',
    defaultMessage: 'InScribe · InScribe leverages the power of community + artificial intelligence to connect individuals to the answers, resources, and people they need to succeed.',
    description: 'A description of the inscibe app.',
  },
  // discourse
  'appName-discourse': {
    id: 'authoring.discussions.appList.appName-discourse',
    defaultMessage: 'Discourse',
    description: 'The name of the discourse app.',
  },
  'appDescription-discourse': {
    id: 'authoring.discussions.appList.appDescription-discourse',
    defaultMessage: 'Discourse is modern forum software for your community. Use it as a mailing list, discussion forum, long-form chat room, and more!',
    description: 'A description of the discourse app.',
  },

  // Ed Discuss
  'appName-ed-discuss': {
    id: 'authoring.discussions.appList.appName-ed-discuss',
    defaultMessage: 'Ed Discuss',
    description: 'The name of the Ed Discuss app.',
  },
  'appDescription-ed-discuss': {
    id: 'authoring.discussions.appList.appDescription-ed-discus',
    defaultMessage: 'Ed Discussion helps scale class communication in a beautiful and intuitive interface. Questions reach and benefit the whole class. Less emails, more time saved.',
    description: 'A description of the Ed discus app.',
  },
  // Features
  'featureName-discussion-page': {
    id: 'authoring.discussions.featureName-discussion-page',
    defaultMessage: 'Discussion Page',
    description: 'The name of a discussions feature.',
  },
  'featureName-embedded-course-sections': {
    id: 'authoring.discussions.featureName-embedded-course-sections',
    defaultMessage: 'Embedded Course Sections',
    description: 'The name of a discussions feature.',
  },
  'featureName-lti': {
    id: 'authoring.discussions.featureName-lti',
    defaultMessage: 'LTI Integration',
    description: 'The name of a discussions feature.',
  },
  'featureName-advanced-in-context-discussion': {
    id: 'authoring.discussions.featureName-advanced-in-context-discussion',
    defaultMessage: 'Advanced In Context Discussion',
    description: 'The name of a discussions feature.',
  },
  'featureName-anonymous-posting': {
    id: 'authoring.discussions.featureName-anonymous-posting',
    defaultMessage: 'Anonymous Posting',
    description: 'The name of a discussions feature.',
  },
  'featureName-automatic-learner-enrollment': {
    id: 'authoring.discussions.featureName-automatic-learner-enrollment',
    defaultMessage: 'Automatic Learner Enrollment',
    description: 'The name of a discussions feature.',
  },
  'featureName-blackout-discussion-dates': {
    id: 'authoring.discussions.featureName-blackout-discussion-dates',
    defaultMessage: 'Blackout Discussion Dates',
    description: 'The name of a discussions feature.',
  },
  'featureName-community-ta-support': {
    id: 'authoring.discussions.featureName-community-ta-support',
    defaultMessage: 'Community TA Support',
    description: 'The name of a discussions feature.',
  },
  'featureName-course-cohort-support': {
    id: 'authoring.discussions.featureName-course-cohort-support',
    defaultMessage: 'Course Cohort Support',
    description: 'The name of a discussions feature.',
  },
  'featureName-direct-messages-from-instructors': {
    id: 'authoring.discussions.featureName-direct-messages-from-instructors',
    defaultMessage: 'Direct Messages from Instructors',
    description: 'The name of a discussions feature.',
  },
  'featureName-discussion-content-prompts': {
    id: 'authoring.discussions.featureName-discussion-content-prompts',
    defaultMessage: 'Discussion Content Prompts',
    description: 'The name of a discussions feature.',
  },
  'featureName-email-notifications': {
    id: 'authoring.discussions.featureName-email-notifications',
    defaultMessage: 'Email Notifications',
    description: 'The name of a discussions feature.',
  },
  'featureName-graded-discussions': {
    id: 'authoring.discussions.featureName-graded-discussions',
    defaultMessage: 'Graded Discussions',
    description: 'The name of a discussions feature.',
  },
  'featureName-in-platform-notifications': {
    id: 'authoring.discussions.featureName-in-platform-notifications',
    defaultMessage: 'In Platform Notifications',
    description: 'The name of a discussions feature.',
  },
  'featureName-internationalization-support': {
    id: 'authoring.discussions.featureName-internationalization-support',
    defaultMessage: 'Internationalization Support',
    description: 'The name of a discussions feature.',
  },
  'featureName-lti-advanced-sharing-mode': {
    id: 'authoring.discussions.featureName-lti-advanced-sharing-mode',
    defaultMessage: 'LTI Advanced Sharing Mode',
    description: 'The name of a discussions feature.',
  },
  'featureName-lti-basic-configuration': {
    id: 'authoring.discussions.featureName-lti-basic-configuration',
    defaultMessage: 'LTI Basic Configuration',
    description: 'The name of a discussions feature.',
  },
  'featureName-primary-discussion-app-experience': {
    id: 'authoring.discussions.featureName-primary-discussion-app-experience',
    defaultMessage: 'Primary Discussion App Experience',
    description: 'The name of a discussions feature.',
  },
  'featureName-question-discussion-support': {
    id: 'authoring.discussions.featureName-question-&-discussion-support',
    defaultMessage: 'Question & Discussion Support',
    description: 'The name of a discussions feature.',
  },
  'featureName-report/flag-content-to-moderators': {
    id: 'authoring.discussions.featureName-report/flag-content-to-moderators',
    defaultMessage: 'Report / Flag Content to Moderators',
    description: 'The name of a discussions feature.',
  },
  'featureName-research-data-events': {
    id: 'authoring.discussions.featureName-research-data-events',
    defaultMessage: 'Research Data Events',
    description: 'The name of a discussions feature.',
  },
  'featureName-simplified-in-context-discussion': {
    id: 'authoring.discussions.featureName-simplified-in-context-discussion',
    defaultMessage: 'Simplified In Context Discussion',
    description: 'The name of a discussions feature.',
  },
  'featureName-user-mentions': {
    id: 'authoring.discussions.featureName-user-mentions',
    defaultMessage: 'User Mentions',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.1': {
    id: 'authoring.discussions.featureName-wcag-2.1',
    defaultMessage: 'WCAG 2.1 Support',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.0-support': {
    id: 'authoring.discussions.wcag-2.0-support',
    defaultMessage: 'WCAG 2.0 Support',
    description: 'The name of a discussions feature.',
  },
});

export default messages;