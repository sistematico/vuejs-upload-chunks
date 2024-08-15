import { Hono } from 'hono'

const app = new Hono()

app.get('/', c => {
  return c.text('Vue.js Upload API')
})

app.post('/', c => {
  return c.text('Vue.js Upload API')
})

export { app as main }