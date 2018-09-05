import httpServices from '../../common/services/httpServices';

const obj = {
    searchUserName(body) {
        const url = "search/users";
        return httpServices.get(url,body);
    },
    fetchRepoDetails(username) {
        const url = `users/${username}/repos`;
        return httpServices.get(url)
    }
}

export default obj;