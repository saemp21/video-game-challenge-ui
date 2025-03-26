export interface ArenaProps {
  ticketType: "participant" | "viewer" | "";
  tournament?: Partial<RequestBodyGetATicketProps>
  id_token?: string;
  access_token?: string;
  refresh_token?: string;
}

export interface FormTicketProps {
  name: string
  howManyTickets: number
  email: string
  phoneNumber: string
  donate: string
  priceTournament: string
  token: string
}

export interface RequestBodyGetATicketProps extends FormTicketProps {
  tournamentId: string
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
  name: string
  desc: string
  startDate: string
  endDate: string
  cost: string
  videGameId: string
  topic: string
  category: string
  platformStreaming: string
  costPreSale: string
  finalPreSale: string
  costEntrance: string
}

export interface StatisticFormProps {
  tournamentDate: string | Date;
  tournamentStatus: string;
}