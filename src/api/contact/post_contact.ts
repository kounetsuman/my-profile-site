import { MICROCMS_BASEURL, MICROCMS_POST_HEADER } from '~/api/const';
import { BlogError } from '~/api/types';

interface InputPostContact {
    name: string;
    email: string | undefined;
    body: string;
}

export const postContact = async ({ name, email, body }: InputPostContact): Promise<void> => {
    console.log(`[postContact] start`);
    console.log(`[postContact] HTTP-Body parameter validation start`);

    if (!name) {
        throw {
            status: 400,
            message: `Bad Request. "name" is required.`,
        } as BlogError;
    }
    if (!email) {
        throw {
            status: 400,
            message: `Bad Request. "email" is required.`,
        } as BlogError;
    }
    if (!body) {
        throw {
            status: 400,
            message: `Bad Request. "body" is required.`,
        } as BlogError;
    }

    console.log(`[postContact] Query parameter validation end`);
    console.log(`[postContact]External API access start`);

    const urls = `${MICROCMS_BASEURL}/contact`;
    console.log(`[postContact] url=${urls}`);

    const httpHeader = {
        method: 'POST',
        headers: MICROCMS_POST_HEADER,
        body: JSON.stringify({ name, email, body }),
    };
    const res = await fetch(urls, httpHeader);
    console.log(`[postContact]res.status= ${res.status}`);

    if (res.status < 200 || 300 <= res.status) {
        throw {
            status: res.status,
            message: `Server error.`,
        } as BlogError;
    }

    console.log(`[postContact]External API access end`);
    console.log(`[postContact] end`);
};
