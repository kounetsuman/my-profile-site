import { useAmp } from 'next/amp';
import GitHubIcon from '@material-ui/icons/GitHub';
import { GITHUB_GRASS_URL, GITHUB_URL, HANDLE_NAME } from '~/lib/const';

const imgGithubGrass: JSX.Element = (
    <>
        <img
            src={GITHUB_GRASS_URL}
            alt={`Github grass`}
            loading={`lazy`}
            width={155}
            height={870}
        />
    </>
);

const imgGithubGrassAmp: JSX.Element = (
    <>
        <amp-img
            src={GITHUB_GRASS_URL}
            alt={`Github grass`}
            width={155}
            height={870}
            layout={`responsive`}
        />
    </>
);

const GithubGrass = (): JSX.Element => {
    const isAmp = useAmp();

    return (
        <div>
            <div className={`font-semibold text-xs pb-1`}>{`GitHub Activities`}</div>
            <div className={`font-semibold text-xs`}>
                <a href="https://github.com/kounetsuman" title={`github link`} target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize="small"></GitHubIcon>
                    {` @${HANDLE_NAME}`}
                </a>
            </div>

            <div className={`pt-2`}>
                <a href={GITHUB_URL} title={`github link`} target="_blank" rel="noreferrer">
                    {isAmp ? imgGithubGrassAmp : imgGithubGrass}
                </a>
            </div>
        </div>
    );
};

export default GithubGrass;
