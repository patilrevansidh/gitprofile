import httpServices from '../../common/services/httpServices';

const obj = {
    searchUserName(body) {
        const url = "search/users";
        return httpServices.get(url,body);
    }
}

export default obj;