import { BlogError } from '~/api/types';
import { MAX_DISPLAY_POST } from '~/api/const';
import { Post } from '~/api/types';
import { getAllContents } from './get_all_contents';

interface InputFindBlogByOffset {
    pageOffset: number;
}

interface OutputFindBlogByOffset {
    contents: Post[];
    totalCount: number;
    hitCount: number;
}

export const findBlogByOffset = async ({
    pageOffset,
}: InputFindBlogByOffset): Promise<OutputFindBlogByOffset> => {
    console.log(`[findBlogByOffset] start`);
    console.log(`[findBlogByOffset]Query parameter validation start`);

    console.log(`[findBlogByOffset] pageOffset=${pageOffset}`);
    const pageOffsetNumber = pageOffset - 1;
    if (pageOffsetNumber < 0) {
        throw {
            status: 400,
            message: `Bad Request. "offset" is a positive integer.`,
        } as BlogError;
    }

    console.log(`[findBlogByOffset]Query parameter validation end`);
    console.log(`[findBlogByOffset]Get sources start`);

    const contents = await getAllContents();
    const totalCount = contents.length;
    const hitCount = contents.length;

    console.log(`[findBlogByOffset]Get sources end`);
    console.log(`[findBlogByOffset]Filtered contents start`);

    const start = MAX_DISPLAY_POST * pageOffsetNumber;
    const end = MAX_DISPLAY_POST * pageOffsetNumber + MAX_DISPLAY_POST;
    console.log(`[findBlogByOffset]Page index start: ${start}    end: ${end}`);
    const displayedContents = contents.filter((_, i) => start <= i && i < end);

    console.log(`[findBlogByOffset]Filtered contents end`);
    console.log(`[findBlogByOffset] end`);

    return {
        contents: displayedContents,
        totalCount,
        hitCount,
    };
};
