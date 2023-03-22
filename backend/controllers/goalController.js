// @desc Get Goals
// @route GET/ api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
}
// @desc Set goal
// @route POST/ api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(404)
    throw new Error(" Please add a text field !")
  }
  res.status(200).json({
    message: "Set goals",
  });
}
// @desc Update Goal
// @route PUT/ api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({
    message: `Update goals ${req.params.id}`,
  });
}
// @desc Delete Goals
// @route DELETE/ api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `Delete goals ${req.params.id}`,
  });
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}