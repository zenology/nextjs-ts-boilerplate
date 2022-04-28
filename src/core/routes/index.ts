import React from 'react'
import Routes, { LinkProps } from 'next-routes'
import allRoutes from './routes'

const routes = new Routes()

allRoutes.forEach((route) => {
	routes.add(route)
})

export default routes
export const Link = routes.Link as React.ComponentType<LinkProps & { children: React.ReactElement }>
export const Router = routes.Router
