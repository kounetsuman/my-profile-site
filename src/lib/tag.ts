import { Post, TagDetail } from "~/api/types";

/**
 * Returns only tag names from blog posts
 * @param {Post[]} p 
 * @returns {TagDetail[]} tag names
 */
export const tagDetails = (p: Post[]): TagDetail[] => {
    // join all tags
    const tagNameList = p
        .map(post => post.tagList)
        .reduce((a, c) => a.concat(c));
    
    // count duplicated tagName 
    const counts: { [key:string] : number } = {};
    tagNameList.forEach((key, i) => {
        if (key in counts) {
            counts[key] = counts[key] + 1;
        } else {
            counts[key] = 1;
        }
    });

    return tagNameList
        // non duplicate
        .filter((tagName, i, self) => self.indexOf(tagName) === i)
        // mapping
        .map(tagName => {
            return {
                name: tagName,
                postCount: counts[tagName]
            }
        })
        // sorted by postCount(desc)
        .sort((a, b) => {
            if( a.postCount > b.postCount ) return -1;
            if( a.postCount < b.postCount ) return 1;
            return 0;
        })
};
