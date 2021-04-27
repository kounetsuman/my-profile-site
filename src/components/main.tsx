import React, { ReactNode } from 'react';
import GithubGrass from '~/components/github_grass';
import { CardOutside } from '~/components/card-outside';
import Profile from '~/components/profile';
import TagRanking from '~/components/tag-ranking';
import { TagDetail } from '~/api/types';

type MainProps = {
    children?: ReactNode;
    isAmp?: boolean;
    tagRankingList?: TagDetail[];
};

const Main = ({ children, tagRankingList = undefined }: MainProps): JSX.Element => {
    
    return (
        <main className={`p-5 sm:grid sm:grid-cols-6`}>
            <aside className={`hidden sm:block sm:col-start-1 sm:col-span-1`}>
                <div className={`sm:sticky sm:top-10`}>
                    <CardOutside action={false}>
                        <Profile></Profile>
                    </CardOutside>
                    <TagRanking list={tagRankingList}></TagRanking>
                </div>
            </aside>
            <div className={`sm:col-start-2 sm:col-span-4`}>{children}</div>
            <aside className={`hidden sm:block sm:col-start-6 sm:col-span-6`}>
                <CardOutside action={false}>
                    <GithubGrass></GithubGrass>
                </CardOutside>
            </aside>
        </main>
    );
};

export default Main;
