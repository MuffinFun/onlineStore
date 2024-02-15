const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        throw new Error('Uncorrect EMAIL or PASSWORD!!!');
      }

      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        throw new Error(`User with email: ${email} already exist`);
      }

      const hashedPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        email,
        role,
        password: hashedPassword,
      });

      const basket = await Basket.create({
        userId: user.id,
      });
      const token = generateJWT(user.id, user.email, user.role);

      return res.json({ token });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error(`User with email: '${email}' not found`);
      }
      const comparedPswd = bcrypt.compareSync(password, user.password);
      if (!comparedPswd) {
        throw new Error('Incorrect pasword!');
      }
      const token = generateJWT(user.id, user.email, user.role);
      return res.json({ token });
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
  async check(req, res, next) {
    try {
      const token = generateJWT(req.user.id, req.user.email, req.user.role);
      return res.json({ token });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new UserController();
