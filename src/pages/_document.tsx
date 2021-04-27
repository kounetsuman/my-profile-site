import React from 'react';
import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core';

// @ts-ignore
import inlineCss from '!raw-loader!../../styles/output.css';
// @ts-ignore
import mdCss from '!raw-loader!../../styles/github-markdown.css';
// @ts-ignore
import tagRankingCss from '!raw-loader!../../styles/tag-ranking.module.css';

class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const styledComponentsSheet = new ServerStyleSheet();
        const materialUiSheets = new MaterialServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
                originalRenderPage({
                    enhanceApp: (App) => (
                        props
                    ): React.ReactElement<{
                        sheet: ServerStyleSheet;
                    }> =>
                        styledComponentsSheet.collectStyles(
                            materialUiSheets.collect(<App {...props} />)
                        ),
                });

            const initialProps = await NextDocument.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    ...React.Children.toArray(initialProps.styles),
                    ...React.Children.toArray(styledComponentsSheet.getStyleElement()),
                    materialUiSheets.getStyleElement(),
                    <style
                        key="custom"
                        dangerouslySetInnerHTML={{
                            __html: `${inlineCss}\n${mdCss}\n${tagRankingCss}`
                        }}
                    />
                ],
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }
    render(): JSX.Element {
        const THEME_COLOR = `#93C5FD` as const; // blue-300(tailwind)
        return (
            <Html lang="ja">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content={THEME_COLOR} />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icon/icon-192x192.png"
                    />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}

export default Document;
