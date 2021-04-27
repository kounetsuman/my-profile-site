import { Post } from '~/api/types';
import { getAllContents } from './get_all_contents';

interface OutputFindAllBlog {
    contents: Post[];
    totalCount: number;
    hitCount: number;
}

export const findAllBlog = async (): Promise<OutputFindAllBlog> => {
    console.log(`[findAllBlog] start`);
    console.log(`[findAllBlog]Get all contents start`);

    const contents = await getAllContents();
    const totalCount = contents.length;
    const hitCount = contents.length;

    console.log(`[findAllBlog]Get all contents end`);
    console.log(`[findAllBlog] end`);

    return {
        contents,
        totalCount,
        hitCount,
    };
};
