
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try {
        const respones = await axios.get(url);
        return respones;
        console.log(respones);
    } catch (err) {
        
    }
}