const ApiError = require('../error/ApiEror');

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Id does not exist'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
