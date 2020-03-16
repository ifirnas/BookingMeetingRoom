import settings from "./src/config/settings";
import Axios from 'axios'

export const server = Axios.create({
    baseURL: settings.RoomsAvailabilityEndpoint,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
});