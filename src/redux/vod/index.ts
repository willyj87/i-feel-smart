import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContent, fetchContents } from '../../api/vod';

interface VodState {
    contents: unknown,
    content: unknown,
    status: string,
    error: string,
}

const initialState: VodState = {
    contents: [],
    content: {},
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

export const selectContents = (state: { vod: { contents: unknown; }; }) :unknown => state.vod.contents;
export const selectContent = (state: { vod: { content: unknown; }; }) :unknown => state.vod.content;


export default vod.reducer;
