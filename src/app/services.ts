import { ArenaProps, EnterEventBodyRequest, EnterEventSuccessResponse, FormSellProps, FormTournamentProps, FormTournamentSuccessResponse, SellSuccessResponse, ShoppingItemsProps } from "../utils/interface";
import { baseApi } from "./api";

export const service = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // profile: build.query<{ code: number; data: unknown }, void>({
    //   query: () => ({
    //     url: "/me",
    //     method: "GET",
    //   }),
    // }),
    // login: build.mutation<
    //   { code: number; data: unknown },
    //   { password: string; email: string }
    // >({
    //   query: (body) => ({
    //     url: "/login",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    enterEvent: build.mutation<EnterEventSuccessResponse, EnterEventBodyRequest>({
      query: (body) => ({
        url: "/Prod/ventaTiquete",
        method: "POST",
        body
      })
    }),
    sellTicket: build.mutation<SellSuccessResponse, FormSellProps>({
      query: (body) => ({
        url: "/Prod/ventaTiquete",
        method: "POST",
        body
      })
    }),
    getAllTickets: build.mutation<{
      code: number;
      message: string;
      data: ShoppingItemsProps
    }, Partial<ArenaProps>>({
      query: (body) => ({
        url: "/ticket-list",
        method: "POST",
        body
      })
    }),
    buyTicket: build.mutation<FormTournamentSuccessResponse, Partial<FormTournamentProps>>({
      query: (body) => ({
        url: "/Prod/crearTorneo",
        method: "POST",
        body
      })
    }),
  }),
});

export const { useGetAllTicketsMutation, useBuyTicketMutation, useSellTicketMutation, useEnterEventMutation } = service;


//Compras navega a lista de torneos (desc, titulo, precio)
//Ingresar evento navega a ingresar la boleta consumir servicio para comprobar la boleta