import React, { useCallback, useContext } from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import { SearchContext } from '~/context/search-context';

const SearchInput: React.FC = (): JSX.Element => {
    const { search, setSearch } = useContext(SearchContext);
    const router = useRouter();

    const handleChangeKeyword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { value } = e.currentTarget;
            setSearch(value);
        },
        [setSearch]
    );

    const handleClickSearchButton = useCallback(() => {
        void router.push(`/blog/search?keyword=${search}`);
    }, [search, router]);

    const handleKeyDownSearch = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (e.key === 'Enter') {
                void router.push(`/blog/search?keyword=${search}`);
            }
        },
        [search, router]
    );

    return (
        <>
            <div className={`flex justify-between`}>
                <InputBase
                    className={`w-full`}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={search}
                    onChange={handleChangeKeyword}
                    onKeyDown={handleKeyDownSearch}
                />
                <IconButton onClick={handleClickSearchButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </div>
        </>
    );
};

export default SearchInput;
