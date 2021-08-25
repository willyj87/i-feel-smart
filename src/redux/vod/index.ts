import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContent, fetchContents } from '../../api/vod';
import { ContentType } from '../../helpers/interfaces';

interface VodState {
    contents: [ContentType],
    content: ContentType,
    status: string,
    error: string,
}

const initialState: VodState = {
    contents: [{
        title: '',
        summary: '',
        genre: '',
        pictures: {
            thumbnails:['']
        },
        id: null,
    }],
    content: {
        title: '',
        summary: '',
        genre: '',
        pictures: {
            thumbnails:['']
        },
        id: null,
    },
    status: '',
    error: ''
};

export const getContents = createAsyncThunk(
    'vod/fetchContents',
    async () => {
     return fetchContents();
    }
  )
export const getContent = createAsyncThunk(
    'vod/fetchContent',
    async (id: number) => {
      const response = await fetchContent(id)
      return response;
    }
  )
export const vod = createSlice({
    name: 'vod',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContents.pending, (state) => {
            state.status = 'pending';
        }),
        builder.addCase(getContents.fulfilled, (state, action) => {
            state.contents = action.payload;
            state.status = 'fullfilled';
        }),
        builder.addCase(getContents.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message;
        })
        builder.addCase(getContent.pending, (state) => {
            state.status = 'pending';
        }),
        builder.addCase(getContent.fulfilled, (state, action) => {
            state.content = action.payload;
            state.status = 'fullfilled';
        }),
        builder.addCase(getContent.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message;
        })
    }
});

export const selectContents = (state: { vod: { contents: [ContentType]; }; }) :[ContentType] => state.vod.contents;
export const selectContent = (state: { vod: { content: ContentType; }; }) :ContentType => state.vod.content;


export default vod.reducer;
