const path = require('path')
module.exports = {
  version: "1.5",
  title: "Muzyv",
  description: "An audio visualization application that captures canvas and audio directly in the browser.",
  icon: "icon.svg",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "muzyv_frontend", "node_modules")
    if (installed) {
      let running = kernel.script.running(path.resolve(__dirname, "start.js"))
      if (running) {
        return [
          {
            html: '<i class="fa-solid fa-spin fa-spinner"></i> Running',
            type: "link",
            href: "start.js"
          },
          {
            html: '<i class="fa-solid fa-terminal"></i> Terminal',
            type: "link",
            href: "start.js"
          }
        ]
      } else {
        return [
          {
            html: '<i class="fa-solid fa-play"></i> Start',
            type: "link",
            href: "start.js"
          },
          {
            html: '<i class="fa-solid fa-rotate"></i> Update',
            type: "link",
            href: "update.js"
          },
          {
            html: '<i class="fa-solid fa-circle-xmark"></i> Reset',
            type: "link",
            href: "reset.js"
          }
        ]
      }
    } else {
      return [{
        html: '<i class="fa-solid fa-plug"></i> Install',
        type: "link",
        href: "install.js"
      }]
    }
  }
}
