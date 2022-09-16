// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  
  const server = express()
    try {
      server.get('/:id', async (req, res) => {  
        console.log({ params: req.params })

        return app.render(req, res, '/[id]', {id: req.params.id})
      })

      
      server.get('*', handle)
  
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }

  server.listen(port, (err) => {
    if (err) throw err
    console.info(`server ready on port ${port}`)
  })
})
