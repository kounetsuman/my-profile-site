const Footer = (): JSX.Element => (
    <footer className={`h-10 border bg-blue-700 text-white`}>
        <p className={`text-center`}>
            {`created by `}
            <a
                className={`text-blue-500 hover:text-blue-600 visited:text-purple-300`}
                href={`https://kounetsuman.online/blog/post/45fhk7g70i_1`}
                target="_blank"
                rel="noreferrer"
            >{`kounetsuman/my-portfolio-blog`}</a>
            {` | This site uses Google Analytics.`}{' '}
        </p>
    </footer>
);

export default Footer;
