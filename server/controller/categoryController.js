const categoryModel = require('../models/categoryModel');

const getAllCategories = (req, res) => {
    res.status(200).send(categoryModel.getAllCategories());
}
const getQuestionsByCategory = (req, res) => {
    const data = categoryModel.getQuestionsByCategory(req.params.category);
    res.status(200).send(data);
}
module.exports = {
    getAllCategories, 
    getQuestionsByCategory
}