import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArenaProps } from "../utils/interface";

const initialState: Partial<ArenaProps> = {
  ticketType: "",
  tournament: undefined
};

export const arenaSlice = createSlice({
  name: "arena",
  initialState,
  reducers: {
    setTicketType: (state: Partial<ArenaProps>, action: PayloadAction<ArenaProps[ "ticketType" ]>) => {
      state.ticketType = action.payload
    },
    setResumeDataTournament: (state: Partial<ArenaProps>, action: PayloadAction<ArenaProps[ "tournament" ]>) => {
      state.tournament = action.payload
    }
    // increment: (state) => {
    //   state.perico += 1;
    // },
    // setNumber: (state, action) => {
    //   state.perico = action.payload;
    // },
  },
});

export const {
  // increment, setNumber 
  setResumeDataTournament,
  setTicketType
} = arenaSlice.actions;
