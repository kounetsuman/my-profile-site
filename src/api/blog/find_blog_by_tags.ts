import { BlogError } from '~/api/types';
import { Post } from '~/api/types';
import { getAllContents } from './get_all_contents';

interface OutputFindBlogByTag {
    contents: Post[];
    totalCount: number;
    hitCount: number;
}

export const findBlogByTag = async (tag: string): Promise<OutputFindBlogByTag> => {
    console.log(`[findBlogByTag] start`);
    console.log(`[findBlogByTag]Query parameter validation start`);

    if (!tag) {
        throw {
            status: 400,
            message: `Bad Request. "tag" is required.`,
        } as BlogError;
    }

    console.log(`[findBlogByTag]Query parameter validation end`);
    console.log(`[findBlogByTag]Get sources start`);

    const allContents = await getAllContents();
    const totalCount = allContents.length;

    console.log(`[findBlogByTag]Get sources end`);
    console.log(`[findBlogByTag]Filtered contents start`);

    const contents = allContents.filter((c) => c.tagList.includes(tag));
    const hitCount = contents.length;

    console.log(`[findBlogByTag]Filtered contents end`);
    console.log(`[findBlogByTag] end`);

    return {
        contents,
        totalCount,
        hitCount,
    };
};
