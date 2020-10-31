import axios from "axios";

const WebService = axios.create({
  baseURL:
    "http://indicadores.brazzo.com.br/homologacao/rest/webservice/webAgendamento/",
});

export default WebService;
