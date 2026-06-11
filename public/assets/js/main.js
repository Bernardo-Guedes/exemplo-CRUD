import { OlimpiadaService } from "../../service/olimpiada-service.js";

const olimpiadaService = new OlimpiadaService();

async function carregarDados(){
    let olimpiadas = await olimpiadaService.getOlimpiadas();
    console.table(olimpiadas)
}

window.addEventListener("load", carregarDados)