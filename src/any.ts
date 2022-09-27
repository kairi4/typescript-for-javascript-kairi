import axios from "axios";
import { title } from "process";

export { };

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=123';

axios.get(url).then(function (response) {
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    let data: Article;
    data = response.data;
    data = [
        {
            id: 1,
            title: 'A',
            description: 'a'
        }
    ];
    console.log(data);
});