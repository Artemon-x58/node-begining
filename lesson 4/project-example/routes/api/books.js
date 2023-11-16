const express = require("express");

const books = require("../../models/books");

const router = express.Router();

const Joi = require("joi");

const { HttpError } = require("../../../helpers");

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
      throw HttpError(404, "Not found");
      // const error = new Error("Not found");
      // error.status = 404;

      // return res.status(404).json({ message: "Not found" });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const results = await books.add(req.body);
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.deleteById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({
      message: "Delete success",
      // OR
      //   res.status(204).send();
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
