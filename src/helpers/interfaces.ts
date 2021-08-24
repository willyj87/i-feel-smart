export interface ContentType{
    title: string,
    id: number,
    summary: string,
    genre: string,
    pictures: {
        thumbnails: string[]
    }
}

export interface ParamsType{
    slug: string,
}

export interface ProgramType{
    title: string,
    id: number,
    description: string,
    category: string,
    pictures: {
        thumbnails: string[]
    }
}