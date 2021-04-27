export const getSearchWords = (keyword: string) => {
    let debris = String(keyword);
    const fullKeywords: string[] = [];
    const regex = /"([^"]+)"/;

    while (true) {
        const regexResults = regex.exec(debris);
        if (!regexResults || !regexResults[0]) {
            break;
        }
        const regexResult = regexResults[0];
        const fullKeyword = regexResult.replace(/["]/g, '');
        fullKeywords.push(fullKeyword);
        debris = debris.replace(regexResult, '');
    }

    const keywords = debris.split(' ');
    return fullKeywords.concat(keywords).filter((e) => e.trim());
};
