import express from "express";
import axios from "axios";

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
