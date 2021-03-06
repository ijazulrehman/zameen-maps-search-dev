import { SearchService } from './search.service';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    search(keywords: string, city: string, society: string): Promise<{
        results: Record<string, any>;
        status: string;
    }>;
    geocode(keywords: string, place_id: string, latlong: string): Promise<{
        results: Record<string, any>;
        status: string;
    }>;
    cities(): Promise<any>;
    societies(city: string, area: string): Promise<any>;
}
