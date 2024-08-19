import ApiService from "../apiService";


class TeamService extends ApiService{

    constructor(){
        super('/api/teams')
    }

    findById(id){
        return this.get(`/${id}`);
    }

    save(team){
        return this.post(`/`, team);
    }

    update(team){
        return this.put(`/${team.id}`, team);
    }

    list(){
        return this.get('/')
    }

    delete(id){
        return this.delete(`/${id}`)
    }
}

export default TeamService;