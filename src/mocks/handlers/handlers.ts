import { http, HttpHandler } from "msw"
import { holidays as holidaysData } from "../data/holidays"

export const handlers: HttpHandler[] = [
  http.get("/holidays", (_info) => {
    return Response.json(holidaysData)
  }),
]
