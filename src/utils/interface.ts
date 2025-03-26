export interface ArenaProps {
  ticketType: "participant" | "viewer" | "";
  tournament?: Partial<FormTicketProps>
  id_token?: string;
  access_token?: string;
  refresh_token?: string;
  profile?: {
    email?: string
  }
}

export interface FormTicketProps {
  tournamentId: string
  name: string
  howManyTickets: number
  email: string
  phoneNumber: string
  donate: string
  priceTournament: string
  token: string
}

export interface RequestBodyGetATicketProps {
  DetailType: string
  Source: string
  Detail: FormTournamentProps
}

export interface ShoppingItemProps {
  id: string;
  title: string;
  desc: string;
  price: number;
  paid: boolean;
}

export type ShoppingItemsProps = ShoppingItemProps[]

export interface FormTournamentProps {
  organizador: string
  nombre: string
  descripcion: string
  fechaInicio: string
  estado: string
  fechaFin: string
  valorEntrada: string
  videoJuegoId: string
  category: string
  platStreamingId: string
  tipoStreaming: boolean | string
  subAdministrador1: string
  subAdministrador2: string
  porcentajePreventa: string
  preventaFin: string
  valorEntradaVista: string
}

export interface StatisticFormProps {
  tournamentDate: string | Date;
  tournamentStatus: string;
}