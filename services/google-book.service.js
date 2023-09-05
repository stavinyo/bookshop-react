import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export const googleBookService = {
    getGoogleBook,
}

function getGoogleBook(value) {

    let googleBookUrl = `https://www.googleapis.com/books/v1/volumes?q=${value}`

    return axios.get(googleBookUrl)
        .then(res => {
            const books = res.data.items
            const bookObjs = books.map(book => {
                const img = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : ''
                console.log(img)
                return {
                    id: utilService.makeId(),
                    title: book.volumeInfo.title || '',
                    subtitle: book.volumeInfo.subtitle || '',
                    authors: book.volumeInfo.authors || [],
                    description: book.volumeInfo.description || '',
                    pageCount: book.volumeInfo.pageCount || '',
                    categories: book.volumeInfo.categories || [],
                    img,
                }
            })
            return bookObjs
        })
        .catch(err => {
            console.log('Error Google books:', err)
        })
}