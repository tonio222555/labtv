export interface ResultGenre {
    genres: Genre[]
}
  
export interface Genre {
    id: number
    name: string
}

export interface ResultDiscover {
    page: number
    results: DiscoverSerie[]
    total_pages: number
    total_results: number
}

export interface ResultDiscover2 {
    page: number
    results: DiscoverMovie[]
    total_pages: number
    total_results: number
}

export interface DiscoverSerie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    first_air_date: string
    name: string
    vote_average: number
    vote_count: number
}
  
export interface DiscoverMovie {
    adult: boolean
    backdrop_path?: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}