import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const apiSlice = createApi({
    reducerPath:"api",
    //לשנות את הURL
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:2004/",
    credentials: 'include',
prepareHeaders: (headers, { getState }) => {
const token = getState().auth.token
if (token) {
headers.set("authorization", `Bearer ${token}`)
}
return headers
}

}),
// tagTypes: ['Posts', 'Users', 'Photos', 'Todos'],
    endpoints:()=>({})
}) 
export default apiSlice 