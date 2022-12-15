import { createSecretKey } from "crypto";
import express from "express"
const router = express.Router();
import { getUsers, createUsers, getUser, deleteUser, updateUser } from "../controllers/users.js"

router.get('/', getUsers);

router.post('/', createUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;