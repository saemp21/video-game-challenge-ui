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
  email: string
  tiquete_id?: string
  transaccion_id?: string
  token_id?: string
  phoneNumber: string
  howManyTickets: number
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
  statusCode: number
  headers: {
    "Access-Control-Allow-Origin": string
  }
  torneos: Array<{
    id: string
    nombre: string
    descripcion: string
    valorEntrada: number
    valorEntradaVista: number
    fechaInicio: string
    fpreventafin: string
    estado: number
  }>
}

export type ShoppingItemsProps = ShoppingItemProps[]


export interface FormTournamentSuccessResponse {
  message: string
  data: {
    organizador: string
    nombre: string
    descripcion: string
    fecha_inicio: string
    fecha_fin: string
    valor_entrada: number
    video_juego_id: number
    plataforma_id: string
    sub_administrador1: string
    sub_administrador2: string
    valor_premio: number
    categoria_id: string
    plat_streaming_id: string
    tipo_streaming: boolean
    porcentaje_preventa: number
    preventa_fin: string
    valor_entrada_vista: number
    topic_id: string
  }
}
export interface FormTournamentProps {
  estado: string
  nombre: string
  descripcion: string
  fechaInicio: string
  fechaFin: string
  valorEntrada: string
  videoJuegoId: string
  plataforma: string
  subAdministrador1: string
  subAdministrador2: string
  valorPremio: number
  categoriaId: string
  platStreamingId: string
  tipoStreaming: string | boolean
  porcentajePreventa: number
  preventaFin: string
  valorEntradaVista: number
  plataformaId: string
  organizador: string
}

export interface StatisticFormProps {
  tournamentDate: string | Date;
  tournamentStatus: string;
}

export interface FormSellProps {
  torneo_id: string
  correo: string
  numero_telefono: string
  donacion: number
  esEspectador: boolean
  numero_entradas: number
  costo_boleta: number
  nombre: string
}

export interface SellSuccessResponse {
  message: string
  data: {
    nombre: string
    correo: string
    tiquete_id: string
    transaccion_id: string
    token_id: string
    donacion: number
    precio: number
    total: number
  }
}



export interface EnterEventSuccessResponse {
  message: string
  data: unknown

}

export interface EnterEventBodyRequest {
  correo: string
  token: string
}

export interface GetAllTournamentSuccessResponse {
  statusCode: number
  headers: {
    "Access-Control-Allow-Origin": string
  }
  torneos: Array<{
    id: string
    nombre: string
    descripcion: string
    valorEntrada: number
    valorEntradaVista: number
    fechaInicio: string
    fpreventafin: string
    estado: number
  }>
}


export interface GetAllTournamentBodyRequest {
  correo: string
}

export interface GetStatiscsSuccesResponse {
  nombre: string
  ganancias: string
  donaciones: string
}