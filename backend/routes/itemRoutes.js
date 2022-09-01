const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const Item = require('../models/Item');

// Create a new item
router.post('/', asyncHandler(async (req, res) => {
	try {
		const item = new Item(req.body)
		await item.save()

		res.status(201).json(item)
	} catch (err) {
		res.status(400)
		throw new Error(err)
	}
}))

// // TEMP - use this to seed data
// router.post('/many', asyncHandler(async (req, res) => {
// 	const newItems = req.body;

// 	for (let newItem of newItems) {
// 		try {
// 			const item = new Item()
// 			item.name = newItem.name
// 			item.category = newItem.category.id
// 			await item.save()
// 			console.log(item)
// 		} catch (err) {
// 			res.status(400)
// 			throw new Error(err)
// 		}
// 	}
// 	res.status(201).json(newItems)
// }))

module.exports = router;