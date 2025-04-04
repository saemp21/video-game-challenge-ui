import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArenaProps } from "../utils/interface";

const initialState: Partial<ArenaProps> = {
  ticketType: "",
  tournament: undefined,
  id_token: undefined,
  access_token: undefined,
  refresh_token: undefined,
  profile: undefined,
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
    },
    setTokens: (state: Partial<ArenaProps>, action: PayloadAction<Partial<ArenaProps>>) => {
      state.id_token = action.payload.id_token
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
    },
    setProfile: (state: Partial<ArenaProps>, action: PayloadAction<ArenaProps[ "profile" ]>) => {
      state.profile = action.payload
    },
  },
});

export const {
  // increment, setNumber 
  setResumeDataTournament,
  setTicketType,
  setTokens,
  setProfile
} = arenaSlice.actions;
