import { AxiosResponse } from "axios";
import client from "../lib/client";

export const fetchContents = async () :Promise<AxiosResponse> => {
    return client.get('/vod/contents', {
        params: {
            dataset: process.env.REACT_APP_API_DATASET,
            limit: process.env.REACT_APP_API_LIMIT
        }
    }).then(response => response.data.content);
}

export const fetchContent = async (id :string) :Promise<AxiosResponse> => {
    return client.get(`/vod/content/${id}`).then(response => response.data.content);
}