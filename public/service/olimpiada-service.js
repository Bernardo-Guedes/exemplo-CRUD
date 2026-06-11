export class OlimpiadaService {
    constructor(){
        this.urlBase = "/olimpiadas";
    }

    async getOlimpiadas(){
        const resposta = await fetch(this.urlBase);
        return resposta.json();
    }

    async getOlimpiada(id){
        const resposta = await fetch(`${this.urlBase}/${id}`);
        return resposta.json();
    }

    async criarOlimpiada(olimpiada){
        const resposta = await fetch(this.urlBase, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(olimpiada),
        });
        return resposta.json();
    }

    async atualizarOlimpiada(id, olimpiada){
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(olimpiada),
        })
        return resposta.json();
    }

    async excluirOlimpiada(id){
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "DELETE",
        })
        return resposta.json();
    }
}

