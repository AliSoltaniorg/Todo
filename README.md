
[![logo128.png](https://i.postimg.cc/GppbRRG7/logo128.png)](https://postimg.cc/JsSf39TZ)

# Todo App

A brief description of what this project does and who it's for
A simple todo app where user can add their task. User can mark an added task as completed . They can delete only completed task or all added task as they wish.
A simple todo app where user can add their tasks. User can set a due date then to alert you and users can set remider time to display notifications to you.
You can set timer for tasks

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) 
[![GitHub issues](https://img.shields.io/github/issues/AliSoltaniorg/Todo)](https://github.com/AliSoltaniorg/Todo/issues)
[![GitHub stars](https://img.shields.io/github/stars/AliSoltaniorg/Todo)](https://github.com/AliSoltaniorg/Todo/stargazers)

## Features

- Timer task's and stop or start tasks
- Alert on the day of task
- Reminder time for task
- Save on Database


## Screenshots

[![Screenshot-2022-10-15-194147.png](https://i.ibb.co/hHtVHKX/Screenshot-2022-10-15-194147.png)](https://github.com/AliSoltaniorg/Todo)



## API Reference

#### Get all Todos

```http
  GET /api/Todos
```

#### Put item

```http
  GET /api/Todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |


## Deployment

To deploy this project run (for two project)

```bash
  dotnet publish EndPoint
```
for frontend project to deploy run

```bash
  npm run build
```

### Do you have an issue (deployment)?
 - [Dotnet Publish](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-publish)
 - [React Deployment](https://create-react-app.dev/docs/deployment/)
 
 
## FAQ
### How to run project?

```bash
dotnet run
```

### How to set url origins

#### first method
In ``program.cs`` file go to policy section
you can change `http://localhost:3000`
#### second method
In ``appsetting.json`` you can change origins to ...
default value is a `null`


