import axios from "axios";

const base = "http://54.179.253.198/api/v1";

export const client = axios.create({ baseURL: base });
