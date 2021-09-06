const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const {title} = request.query;
  const results = title ? projects.filter(repository => repository.title.includes(title)): repositories;

    return response.json(results);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;
  const repository = {id: uuid(), title , url, techs, likes:0};

  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  if(repositoryIndex < 0){
    return response.status(400).json({error: "Repository does not exists"});
}

  const repository = {id, title, url, techs, likes: repositories[repositoryIndex].likes};

  repositories[repositoryIndex] = repository;
  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  repositories.splice(repositoryIndex, 1);

  if(repositoryIndex < 0){
    return response.status(400).json({error: "Repository not found"});
}

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;
  const repository = repositories.find(repository => repository.id == id);

  if(!repository){
    return response.status(400).json({error: "Repository not found"});
}

  repository.likes += 1;

  return response.json(repository);
});

module.exports = app;
