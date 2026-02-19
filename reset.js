module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "rm -rf app"
      }
    },
    {
      method: "notify",
      params: {
        html: "Reset complete! You can now click 'Install' to start fresh."
      }
    }
  ]
}
