const quizData = require('../data.json');

export function getAllCategories() {
    const categories = new Set(); 
  
    quizData.quizes.forEach((category) => {
        categories.add({name: category.category, id: category.category_id}); 
    });
  
    return Array.from(categories); 
}

export function getQuestions(category_id) {
    const category = quizData.quizes.find(quiz => quiz.category_id == category_id)
    if (category) {
        return category.questions;
    } else {
        return null;
    }
}