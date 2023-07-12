import express from "express";
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { weatherController } from "./controllers/weatherController.js";
import { playlistController } from "./controllers/playlist-controller.js";
import { trackController } from "./controllers/track-controller.js";
import { aboutController } from "./controllers/about-controller.js";

export const router = express.Router();

router.get("/", accountsController.index);
router.post("/create-weather-report/addreport", weatherController.addreport);
router.get("/create-weather-report", weatherController.createWeatherReportPage);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);
router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addplaylist", dashboardController.addPlaylist);
router.get("/dashboard/deleteplaylist/:id", dashboardController.deletePlaylist);
router.get("/playlist/:id", playlistController.index);
router.post("/playlist/:id/addtrack", playlistController.addTrack);
router.get("/playlist/:playlistid/deletetrack/:trackid", playlistController.deleteTrack);
router.get("/playlist/:playlistid/edittrack/:trackid", trackController.index);
router.post("/playlist/:playlistid/updatetrack/:trackid", trackController.update);
router.get("/about", aboutController.index);
router.get("/logout", accountsController.logout);