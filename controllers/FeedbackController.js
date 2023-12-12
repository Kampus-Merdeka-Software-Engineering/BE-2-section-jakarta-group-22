// controllers/feedbackController.js
const feedbackService = require('../services/feedbackService');

exports.getAllFeedbacks = async (res) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    res.json(feedbacks);
  } catch (error) {
    next(error);
  }
};

exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await feedbackService.getFeedbackById(req.params.id);
    res.json(feedback);
  } catch (error) {
    next(error);
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const feedback = await feedbackService.createFeedback(req.body);
    res.json(feedback);
  } catch (error) {
    next(error);
  }
};

exports.updateFeedback = async (req, res) => {
  try {
    const updatedFeedback = await feedbackService.updateFeedback(req.params.id, req.body);
    res.json(updatedFeedback);
  } catch (error) {
    next(error);
  }
};

exports.deleteFeedback = async (req, res, next) => {
  try {
    await feedbackService.deleteFeedback(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

exports.deleteFeedbackById = async (req, res) => {
  try {
    const feedback = await feedbackService.deleteFeedbackById(req.params.id);
    res.json(feedback);
  } catch (error) {
    next(error);
  }
};