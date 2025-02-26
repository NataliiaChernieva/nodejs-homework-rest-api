const getAll = require('./getAll')
const getAllByOwner = require('./getAllByOwner')
const getContactById = require('./getContactById')
const postNewContact = require('./postNewContact')
const deleteContact = require('./deleteContact')
const putContact = require('./putContact')
const updateContactFavorite = require('./updateContactFavorite')
const getContactsBySearchQuery = require('./getContactsBySearchQuery')

module.exports = {
  getAll,
  getAllByOwner,
  getContactById,
  postNewContact,
  deleteContact,
  putContact,
  updateContactFavorite,
  getContactsBySearchQuery
}
