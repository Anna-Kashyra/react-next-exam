export type SearchParamsProps = {
    searchParams: Promise<{ page?: string }>;
};

export type AllMediasProps = {
    currentPage: number;
}

export type GetMediasParams = {
    page?: number;
};