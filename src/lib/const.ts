/**
 * public environment valiables
 */
console.log(`[PUBLIC ENVIRONMENT VALIABLES READING START]`);

const SAUNNER_ID = process.env.NEXT_PUBLIC_SAUNNER_ID;
const HANDLE_NAME = process.env.NEXT_PUBLIC_HANDLE_NAME;
const MY_FIRST_NAME = process.env.NEXT_PUBLIC_MY_FIRST_NAME;
const MY_LAST_NAME = process.env.NEXT_PUBLIC_MY_LAST_NAME;
const NODE_ENV = process.env.NODE_ENV;
const IS_DEVELOP = (NODE_ENV === 'development') as boolean;
const MYDOMAIN = process.env.NEXT_PUBLIC_MYDOMAIN;
const MY_ORIGIN = IS_DEVELOP ? `http://${MYDOMAIN}` : `https://${MYDOMAIN}`;
console.log(`[ENV]    SAUNNER_ID: ${SAUNNER_ID}`);
console.log(`[ENV]   HANDLE_NAME: ${HANDLE_NAME}`);
console.log(`[ENV] MY_FIRST_NAME: ${MY_FIRST_NAME}`);
console.log(`[ENV]  MY_LAST_NAME: ${MY_LAST_NAME}`);
console.log(`[ENV]      NODE_ENV: ${NODE_ENV}`);
console.log(`[ENV]    IS_DEVELOP: ${String(IS_DEVELOP)}`);
console.log(`[ENV]      MYDOMAIN: ${MYDOMAIN}`);
console.log(`[ENV]     MY_ORIGIN: ${MY_ORIGIN}`);
export { IS_DEVELOP, HANDLE_NAME, MY_FIRST_NAME, MY_LAST_NAME, MY_ORIGIN };

console.log(`[PUBLIC ENVIRONMENT VALIABLES READING END]`);

/**
 * link url
 */
console.log(`[LINKS READING START]`);

const LINKEDIN_URL = `https://www.linkedin.com/in/${HANDLE_NAME}` as const;
const GITHUB_URL = `https://github.com/${HANDLE_NAME}` as const;
const TWITTER_URL = `https://twitter.com/${HANDLE_NAME}` as const;
const SAUNA_IKITAI_URL = `https://sauna-ikitai.com/saunners/${SAUNNER_ID}` as const;
const GITHUB_GRASS_URL = `https://grass-graph.moshimo.works/images/${HANDLE_NAME}.png?rotate=90` as const;
console.log(`[LINK]    LINKEDIN_URL: ${LINKEDIN_URL}`);
console.log(`[LINK]      GITHUB_URL: ${GITHUB_URL}`);
console.log(`[LINK]     TWITTER_URL: ${TWITTER_URL}`);
console.log(`[LINK]SAUNA_IKITAI_URL: ${SAUNA_IKITAI_URL}`);
console.log(`[LINK]GITHUB_GRASS_URL: ${MY_LAST_NAME}`);
export { LINKEDIN_URL, GITHUB_URL, TWITTER_URL, SAUNA_IKITAI_URL, GITHUB_GRASS_URL };

console.log(`[LINKS READING END]`);

/**
 * else const
 */
console.log(`[ELSE CONST SETTING START]`);

const PER_PAGE = 5 as const;
const MAX_PAGE = 5 as const;
const ISR_TIME = 3600 as const;
const DEFAULT_ICON = `/icon/icon-72x72.png` as const;
console.log(`[VALUE]      PER_PAGE: ${String(PER_PAGE)}`);
console.log(`[VALUE]      MAX_PAGE: ${String(MAX_PAGE)}`);
console.log(`[VALUE]      ISR_TIME: ${String(ISR_TIME)}`);
console.log(`[VALUE]  DEFAULT_ICON: ${String(DEFAULT_ICON)}`);
export { PER_PAGE, MAX_PAGE, ISR_TIME, DEFAULT_ICON };

console.log(`[ELSE CONST SETTING END]`);
