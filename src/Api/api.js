import axios from "axios";

const instance =axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

export const booksAPI = {
    async getBooks(title_subject, orderBy='relevance', startIndex = 0, maxResults = 30){
        const response = await instance
            .get(`?q=${title_subject}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyAYRwMBI0z_39QhdabZkGlFxzCBD81qDHk`);
        return response.data;
    },
    // async getBooksWithChosedCategory(title_subject, orderBy='relevance', category ,startIndex = 0, maxResults = 30){
    //     const response = await instance
    //         .get(`?q=${title_subject}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyAYRwMBI0z_39QhdabZkGlFxzCBD81qDHk`);
    //     return response.data;
    // },
    async getBookProfile(id){
        const response = await instance
            .get(`/${id}`);
        return response.data;
    }
};

