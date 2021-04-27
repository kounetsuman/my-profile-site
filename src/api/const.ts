export const DOWNLOAD_POST_LIMIT = 50 as const;
export const MAX_DISPLAY_POST = 5 as const;
export const MAX_SUMMARY_LENGTH = 200 as const;

/**
 * private environment valiables
 */
console.log(`[PRIVATE ENVIRONMENT VALIABLES READING START]`);

const MICROCMS_ACCESS_KEY = process.env.NEXT_PUBLIC_MICROCMS_ACCESS_KEY;
const MICROCMS_WHITE_ACCESS_KEY = process.env.NEXT_PUBLIC_MICROCMS_WHITE_ACCESS_KEY;
const MICROCMS_BASEURL = process.env.NEXT_PUBLIC_MICROCMS_BASEURL;
console.log(`[ENV]      MICROCMS_ACCESS_KEY: ${MICROCMS_ACCESS_KEY}`);
console.log(`[ENV]MICROCMS_WHITE_ACCESS_KEY: ${MICROCMS_WHITE_ACCESS_KEY}`);
console.log(`[ENV]         MICROCMS_BASEURL: ${MICROCMS_BASEURL}`);
export { MICROCMS_BASEURL };

console.log(`[PRIVATE ENVIRONMENT VALIABLES READING END]`);

/** microcms http get header */
type MicrocmsHTTPGETHeader = {
    headers: {
        'X-API-KEY': string;
    };
};
export const MICROCMS_GET_HEADER = {
    headers: { 'X-API-KEY': MICROCMS_ACCESS_KEY },
} as MicrocmsHTTPGETHeader;

/** microcms http post header */
type MicrocmsHTTPPOSTHeader = {
    'Content-Type': string;
    'X-WRITE-API-KEY': string;
};
export const MICROCMS_POST_HEADER = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-WRITE-API-KEY': MICROCMS_WHITE_ACCESS_KEY,
} as MicrocmsHTTPPOSTHeader;