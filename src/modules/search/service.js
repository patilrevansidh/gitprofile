import httpServices from '../../common/services/httpServices';

const obj = {
    searchUserName(username) {
        const body = {q : username}
        const url = "search/users";
        return httpServices.get(url,body);
    }
}

export default obj;