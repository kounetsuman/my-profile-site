import Link from 'next/link';
import { PER_PAGE } from '~/lib/const';
import { range } from '~/lib/range';

const START_INDEX = 1 as number;
const COUNT = 4 as number;

type PageLinksProps = {
    current: number;
    start: number;
    end: number;
    total: number;
};

type PaginationProps = {
    current: number;
    totalCount: number;
};

const PageLinks = ({ current, start, end, total }: PageLinksProps) => {
    console.log(`C[Pagination#PageLinks]  current=${current}`);
    console.log(`C[Pagination#PageLinks]    start=${start}`);
    console.log(`C[Pagination#PageLinks]      end=${end}`);
    console.log(`C[Pagination#PageLinks]    total=${total}`);

    return (
        <nav className={`flex justify-evenly w-full pt-4 text-white`}>
            <Link key={START_INDEX} href={`/blog/[offset]`} as={`/blog/${START_INDEX}`}>
                <a>{`<<`}</a>
            </Link>
            {range(start, end).map((e) => {
                const style = e == current ? `bg-blue-200 text-gray` : ``;
                return (
                    <div key={e} className={`active:bg-blue-200 hover:bg-blue-400 rounded-full ${style}`}>
                        <Link href={`/blog/[offset]`} as={`/blog/${e}`}>
                            <a>{e}</a>
                        </Link>
                    </div>
                );
            })}
            <Link key={total} href={`/blog/[offset]`} as={`/blog/${total}`}>
                <a>{`>>`}</a>
            </Link>
        </nav>
    )
};

export const Pagination = ({ current, totalCount }: PaginationProps): JSX.Element => {
    console.log(`C[Pagination]    current=${current}`);
    console.log(`C[Pagination] totalCount=${totalCount}`);

    const lastIndex = Math.ceil(totalCount / PER_PAGE);
    console.log(`C[Pagination]  lastIndex=${lastIndex}`);

    const isInit = current <= COUNT - START_INDEX;
    if (isInit) {
        console.log(`C[Pagination]  isInit`);
        const end = (START_INDEX + COUNT);
        return (
            <PageLinks
                current={current}
                start={START_INDEX}
                end={end}
                total={lastIndex}
            />
        );
    }
        
    const isNotInit = lastIndex - COUNT <= current && current <= lastIndex;
    if (isNotInit) {
        console.log(`C[Pagination]  isNotInit`);
        const start = (lastIndex - COUNT);
        return (
            <PageLinks
                current={current}
                start={start}
                end={lastIndex}
                total={lastIndex}
            />
        );
    }
        
    console.log(`C[Pagination#Pagination]  else`);
    const start = Number(current) - (COUNT / 2);
    const end = Number(current) + (COUNT / 2);
    return (
        <PageLinks
            current={current}
            start={start}
            end={end}
            total={lastIndex}
        />
    );
};
