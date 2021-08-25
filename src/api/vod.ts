import { ContentType } from "../helpers/interfaces";
import client from "../lib/client";

export const fetchContents = async () :Promise<[ContentType]> => {
    return client.get('/vod/contents', {
        params: {
            dataset: process.env.REACT_APP_API_DATASET,
            limit: process.env.REACT_APP_API_LIMIT
        }
    }).then(response => response.data.contents);
}

export const fetchContent = async (id :number) :Promise<ContentType> => {
    return client.get(`/vod/content/${id}`).then(response => response.data.content);
}