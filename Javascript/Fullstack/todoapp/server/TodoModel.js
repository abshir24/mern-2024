const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: String,
    description: String
},
{
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo