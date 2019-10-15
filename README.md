[![Build Status](https://travis-ci.com/KenticoDocs/kontent-docs-integration-tests.svg?branch=master)](https://travis-ci.com/KenticoDocs/kontent-docs-integration-tests)
[![codebeat badge](https://codebeat.co/badges/8335b5eb-516c-4066-bc0c-27e7fe53508e)](https://codebeat.co/projects/github-com-kenticodocs-kontent-docs-integration-tests-master)

# Kentico Kontent Documentation - Integration Tests
Integration tests for Kentico Kontent [documentation portal](https://docs.kontent.ai/), which utilizes Kentico Kontent as a source of its data.

The service is responsible for testing the integration between various [Kentico Kontent Documentation services](https://github.com/KenticoDocs?utf8=✓&q=kontent-docs).

## Overview
Tests copy selected content types from live Kentico Kontent project to a testing Kentico Kontent project. Afterwards, content items are created in the test project and filled with content. This is all done using [Kentico Kontent management JavaScript SDK](https://github.com/Kentico/kontent-management-sdk-js).

The tests then check whether the created content items have been indexed on Algolia, which is used for search functionality on Kentico Kontent Documentation.

## Setup

### Prerequisites
1. Node (+yarn) installed
2. Subscriptions on Kentico Kontent

### Instructions
1. Clone the project repository.
2. Run `yarn install` in the terminal.
3. Create `.env` file and set the required keys there.
4. Run the tests using `yarn test`.

#### Required Keys
* `LIVE_CM_API_KEY` - Content management API key of live Kentico Kontent project
* `LIVE_PROJECT_ID` - Project ID of live Kentico Kontent project
* `TEST_CM_API_KEY` - Content management API key of test Kentico Kontent project
* `TEST_PROJECT_ID` - Project ID of test Kentico Kontent project
* `SEARCH_APP_ID` - Algolia application ID
* `SEARCH_API_KEY` - Algolia admin API key
* `SEARCH_INDEX_NAME` - Index name in Algolia application
* `CASCADE_PUBLISH_ID` - Cascade Publish workflow step ID (test KC project)
* `PUBLISHED_ID` - Publish workflow step ID (test KC project)
* `PUBLISHER_TRIGGER_URL` - Trigger endpoint of the [Publisher Service](https://github.com/KenticoDocs/cloud-docs-publisher)
* `WEB_URL` - URL of the deployed [web instance](https://github.com/KenticoDocs/kontent-docs-web)

## How To Contribute

Feel free to open a new issue where you describe your proposed changes, or even create a new pull request from your branch with proposed changes.

## Licence

All the source codes are published under MIT licence.
