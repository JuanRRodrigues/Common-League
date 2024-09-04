import ApiService from "../apiService";


class PlayerService extends ApiService{

    constructor(){
        super('api/team.json')
    }

    findById(id){
        return this.get(`/${id}`);
    }

    save(player){
        return this.post(`/`, player);
    }

    update(player){
        return this.put(`/${player.id}`, player);
    }

    list(){
        return this.get('/')
    }

    delete(id){
        return this.delete(`/${id}`)
    }
}

export default PlayerService;