import { getSearchWords } from '~/lib/keyword';
import { Post } from '~/api/types';
import { getAllContents } from './get_all_contents';

interface OutputFindBlogByKeyword {
    contents: Post[];
    totalCount: number;
    hitCount: number;
}

export const findBlogByKeyword = async (
    keyword: string | string[] | undefined
): Promise<OutputFindBlogByKeyword> => {
    console.log(`[findBlogByKeyword] start`);
    console.log(`[findBlogByKeyword]Get sources start`);

    const keywords = getSearchWords(String(keyword));
    const allContents = await getAllContents();
    const totalCount = allContents.length;

    console.log(`[findBlogByKeyword]Get sources end`);
    console.log(`[findBlogByKeyword]Filtered contents start`);

    const contents = allContents.filter((c) => {
        return !keywords.map((keyword) => c.body.indexOf(`${keyword}`)).includes(-1);
    });
    const hitCount = contents.length;

    console.log(`[findBlogByKeyword]Filtered contents end`);
    console.log(`[findBlogByKeyword] end`);

    return {
        contents,
        totalCount,
        hitCount,
    };
};
