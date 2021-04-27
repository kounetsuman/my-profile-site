import React from 'react';
import Tag from '~/components/tag';
import { TagDetail } from '~/api/types';
import { CardOutside } from '~/components/card-outside';

type P = {
    list?: TagDetail[];
}

const TagRanking = ({ list }: P): JSX.Element => {
    if (!list) return (<></>)
    return (
        <CardOutside action={false}>
            <span className={`sm:font-semibold sm:text-sm sm:py-2`}>{`Tag ranking`}</span>
            <ul className={`tag-ranking-hidden-scroll flex flex-row flex-wrap overflow-y-scroll max-h-80`}>
                {list.map(t => {
                    return (
                        <li key={`TagRanking-li-${t.name}`}>
                            {`[${t.postCount}] `}<Tag key={`TagRanking-Tag-${t.name}`}>{t.name}</Tag>
                        </li>
                    )
                })}
            </ul>
        </CardOutside>
    );
};

export default TagRanking;
