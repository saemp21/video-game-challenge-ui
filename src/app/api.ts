import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../app/store';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_DEV_URL, // Define la URL base del backend
	// prepareHeaders: (headers, {}) => {
	prepareHeaders: (headers) => {

		return headers;
	},
});

export const api = createApi({
	baseQuery,
	endpoints: () => ({}),
});
