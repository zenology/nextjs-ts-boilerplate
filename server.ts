import path from 'path'
import express from 'express'
import next from 'next'
import favicon from 'serve-favicon'
import routes from './src/core/routes'

const port = process.env.PORT || 3000

const app = next({
	dev: process.env.NODE_ENV !== 'production'
})

const handle = routes.getRequestHandler(app)

app
	.prepare()
	.then(() => {
		const server = express()

		server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

		server.get('*', function (req, res) {
			handle(req, res)
		})

		server.listen(port, () => {
			// eslint-disable-next-line
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
	.catch((e: any) => {
		// eslint-disable-next-line
		console.error(e)
		process.exit(1)
	})
