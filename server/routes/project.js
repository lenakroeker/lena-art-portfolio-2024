const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const authenticateToken = require("./authenticateToken");

// GET project by id
router.get("/find/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const projects = await Project.find({
      categories: { $regex: new RegExp(req.params.category, "i") },
    });
    if (projects.length > 0) {
      res.status(200).json(projects);
    } else {
      res.status(404).json({ message: "No projects found for this category" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new project
router.post("/", authenticateToken, async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json("router error" + error);
  }
});

// EDIT project by id
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE project by id
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (deletedProject) {
      res.status(200).json({ message: "Project deleted successfully" });
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
