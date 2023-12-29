import { createRouter, createWebHistory } from 'vue-router'
import Books from '@/views/Books.vue'
import Book from '@/views/Book.vue'
import AddBook from '@/views/AddBook.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: Books
    },
    {
      path: '/books/:id',
      name: 'book',
      component: Book
    },
    {
      path: '/add-book',
      name: 'addBook',
      component: AddBook
    }
  ]
})

export default routes
