require('dotenv').config();

export const TEST_API_KEY = process.env.TEST_CM_API_KEY || '';
export const TEST_PROJECT_ID = process.env.TEST_PROJECT_ID || '';
export const LIVE_API_KEY = process.env.LIVE_CM_API_KEY || '';
export const LIVE_PROJECT_ID = process.env.LIVE_PROJECT_ID || '';

export const CASCADE_PUBLISH_ID = process.env.KC_STEP_CASCADE_PUBLISH_ID || '';
export const PUBLISHED_ID = process.env.KC_STEP_PUBLISHED_ID || '';
export const PUBLISHER_TRIGGER_URL = process.env.PUBLISHER_TRIGGER_URL || '';

export const SEARCH_APP_ID = process.env.SEARCH_APP_ID || '';
export const SEARCH_API_KEY = process.env.SEARCH_API_KEY || '';
export const SEARCH_INDEX_NAME = process.env.SEARCH_INDEX_NAME || '';

export const WEB_URL = process.env.WEB_URL || '';
