module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "git pull",
        path: "app"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "npm install",
        path: "app/muzyv_frontend"
      }
    },
    {
      method: "notify",
      params: {
        html: "Update complete!"
      }
    }
  ]
}
