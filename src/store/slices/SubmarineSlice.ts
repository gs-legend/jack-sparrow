import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../ConfigureStore';
import { Submarine } from '@/types/Submarine';

const initialState: {
    submarines: Submarine[]
} = {
    submarines: []
};

const name = 'submarine';

export const submarineSlice = createSlice({
    name: name,
    initialState,
    reducers: {
        setSubmarines: (state, { payload }: PayloadAction<Submarine[]>) => {
            payload && (state.submarines = payload);
        },
        addSubmarine: (state, { payload }: PayloadAction<Submarine>) => {
            state.submarines.push(payload);
        },
        updateSubmarineState: (state, { payload }: PayloadAction<Submarine>) => {
            const _submarines = state.submarines?.map((submarine: Submarine) => {
                if (submarine.id === payload.id) {
                    return { ...submarine, state: payload.state }
                } else return submarine;
            });
            state.submarines = _submarines;
        },
        removeSubmarine: (state, { payload }: PayloadAction<string>) => {
            const _submarines = state.submarines?.filter((submarine: Submarine) => {
                return submarine.id !== payload;
            });
            state.submarines = _submarines;
        },
    },
});

export const { setSubmarines, addSubmarine, removeSubmarine, updateSubmarineState } = submarineSlice.actions;

export const getSubmarines = (state: RootState) => state.submarine.submarines;

export default submarineSlice.reducer;
