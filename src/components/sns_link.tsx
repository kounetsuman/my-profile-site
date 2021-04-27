import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GITHUB_URL, SAUNA_IKITAI_URL, TWITTER_URL, LINKEDIN_URL } from '~/lib/const';

const SNSLink = (): JSX.Element => {
    return (
        <nav className={`flex justify-evenly w-full py-2`}>
            <a href={`${TWITTER_URL}`} title={`twitter link`} target="_blank" rel="noreferrer">
                <TwitterIcon></TwitterIcon>
            </a>
            <a href={`${GITHUB_URL}`} title={`github link`} target="_blank" rel="noreferrer">
                <GitHubIcon></GitHubIcon>
            </a>
            <a href={`${LINKEDIN_URL}`} title={`linkedin link`} target="_blank" rel="noreferrer">
                <LinkedInIcon></LinkedInIcon>
            </a>
            {/* <a href={`${SAUNA_IKITAI_URL}`} target="_blank" rel="noreferrer">
                <object
                    type="image/svg+xml"
                    className={`pointer-events-none w-8 h-8`}
                    data={`/images/logo/sauna-ikitai.logo.svg`}
                />
            </a> */}
            {/* https://www.linkedin.com/in/kounetsuman/ */}
        </nav>
    );
};

export default SNSLink;
