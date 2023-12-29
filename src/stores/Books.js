import { defineStore } from 'pinia'
export const useBookStore = defineStore({
  id: 'book',
  state: () => ({
    books: []
  }),
  actions: {
    addBook({ title, about }) {
      if (title === '') {
        return
      }
      this.books.push({
        id: this.books.length ? this.books.at(-1).id + 1 : 0,
        title,
        about,
        reviews: []
      })
      this.setToLocalStorage()
    },
    deleteBook(bookIdToDelete) {
      const newArr = this.books.filter((book) => book.id !== bookIdToDelete)
      this.books = newArr
      this.setToLocalStorage()
    },
    addReview({ bookId, review }) {
      const bookToReview = this.books.find((book) => book.id === bookId)
      const newReview = {
        id: bookToReview.reviews.length
          ? bookToReview.reviews.at(-1).id + 1
          : 0,
        text: review
      }
      bookToReview.reviews.push(newReview)
      this.setToLocalStorage()
    },
    deleteReview({ bookId, reviewId }) {
      const bookToRemoveReview = this.books.find((book) => book.id === bookId)
      bookToRemoveReview.reviews = bookToRemoveReview.reviews.filter(
        (review) => review.id !== reviewId
      )
      this.setToLocalStorage()
    },
    getFromLocalStorage() {
      const str = localStorage.getItem('books')
      const arr = JSON.parse(str)
      this.books = arr || []
    },
    setToLocalStorage() {
      const str = JSON.stringify(this.books)
      localStorage.setItem('books', str)
    }
  }
})
