'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.post('properties/:id/images', 'ImageController.store')
    .middleware('auth')

Route.get('images/:path', 'ImageController.show')

Route.resource('properties', 'PropertyController')
    .apiOnly()
    .middleware('auth')
