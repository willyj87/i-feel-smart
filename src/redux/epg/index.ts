import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProgram, fetchPrograms } from '../../api/epg';

interface EpgState {
    programs: unknown,
    program: unknown,
    status: string,
    error: string,
}

const initialState: EpgState = {
    programs: [],
    program: {},
    status: '',
    error: ''
};

export const getPrograms = createAsyncThunk(
    'epg/fetchPrograms',
    async () => {
     return fetchPrograms();
    }
  )
export const getProgram = createAsyncThunk(
    'epg/fetchProgram',
    async (id: number) => {
      const response = await fetchProgram(id)
      return response;
    }
  )
export const epg = createSlice({
    name: 'epg',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPrograms.pending, (state) => {
            state.status = 'pending';
        }),
        builder.addCase(getPrograms.fulfilled, (state, action) => {
            state.programs = action.payload;
            state.status = 'fullfilled';
        }),
        builder.addCase(getPrograms.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message;
        })
        builder.addCase(getProgram.pending, (state) => {
            state.status = 'pending';
        }),
        builder.addCase(getProgram.fulfilled, (state, action) => {
            state.program = action.payload;
            state.status = 'fullfilled';
        }),
        builder.addCase(getProgram.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message;
        })
    }
});

export const selectPrograms = (state: { epg: { programs: unknown; }; }) :unknown => state.epg.programs;
export const selectProgram = (state: { epg: { program: unknown; }; }) :unknown => state.epg.program;


export default epg.reducer;
