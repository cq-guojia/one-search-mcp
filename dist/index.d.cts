#!/usr/bin/env node
import AsyncRetry from 'async-retry';

interface IMediaItem {
    thumbnail?: string;
    src?: string;
}
interface ISearchRequestOptions {
    query: string;
    page?: number;
    limit?: number;
    categories?: string;
    format?: string;
    language?: string;
    engines?: string;
    safeSearch?: 0 | 1 | 2;
    timeRange?: string;
    timeout?: number | string;
    apiKey?: string;
    apiUrl?: string;
    retry?: AsyncRetry.Options;
    /**
     * 透传参数，用于传递搜索引擎特有的参数
     * 例如：searchDepth, includeImages, includeAnswer 等
     */
    extraParams?: Record<string, any>;
}
interface ISearchResponseResult {
    title: string;
    snippet: string;
    url: string;
    thumbnailUrl?: string;
    markdown?: string;
    source?: string;
    engine?: string;
    image?: IMediaItem | null;
    video?: IMediaItem | null;
}
interface ISearchResponse {
    results: ISearchResponseResult[];
    success: boolean;
}
type SearchProvider = 'searxng' | 'duckduckgo' | 'bing' | 'tavily' | 'local' | 'google' | 'zhipu' | 'exa' | 'bocha';
type SearchTimeRange = 'year' | 'month' | 'week' | 'day';

export type { IMediaItem, ISearchRequestOptions, ISearchResponse, ISearchResponseResult, SearchProvider, SearchTimeRange };
