import { AxiosResponse } from "axios";
import client from "../lib/client";

export const fetchPrograms = async () :Promise<AxiosResponse> => {
    return client.get('/epg/programs', {
        params: {
            dataset: process.env.REACT_APP_API_DATASET,
            limit: process.env.REACT_APP_API_LIMIT,
            channel: process.env.REACT_APP_API_EPG_CHANNEL
        }
    }).then(response => response.data.contents);
}

export const fetchProgram = async (id :number) :Promise<AxiosResponse> => {
    return client.get(`/epg/program/${id}`).then(response => response.data.content);
}