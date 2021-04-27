export interface Post extends PostHeader, PostBody, MicrocmsReqHeader {}

export interface PostDetail extends PostHeader, MicrocmsReqHeader {
    contentHtml: string;
    summary: string;
    time2FinishReading: number;
};

export type PostHeader = {
    title: string;
    tagList: string[];
    published: boolean;
};

export type PostBody = {
    summary: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
};

export interface MicrocmsReq extends MicrocmsReqHeader, MicrocmsReqBody {}

export type MicrocmsReqHeader = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
};

export type MicrocmsReqBody = {
    body: string;
};

export type BlogError = {
    status: number;
    message: string;
};

export type TagDetail = {
    name: string;
    postCount: number;
}
