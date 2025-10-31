import { Router } from "express";

import { 
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers
} from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/auth";
import { getAgreementHistory, getProcessHistory } from "../controllers/history.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all-users", authenticateToken, getAllUsers);

// Protected routes (require authentication)
router.get("/user-profile", authenticateToken, getUserProfile);
router.put("/update-profile", authenticateToken, updateUserProfile);
router.get("/agreement-history", getAgreementHistory);
router.get("/process-history", getProcessHistory);

export default router;

