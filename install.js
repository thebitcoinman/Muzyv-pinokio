module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/thebitcoinman/Muzyv.git app"
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
        html: "Installation complete! Click 'Start' to launch Muzyv."
      }
    }
  ]
}
