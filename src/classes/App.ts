export default class App {
  public run() {
    window.addEventListener("hashchange", () => {
      console.log(`hash changed to: ${window.location.hash}`);

      this.runAction();
    });

    if (window.location.hash.length == 0) {
      window.location.hash = "/";
    } else {
      this.runAction();
    }
  }

  private runAction() {
    const path = window.location.hash.replace("#", "");

    if (path === "/") {
      console.log("Home page");
    } else if (path === "/contact") {
      console.log("Contact page");
    } else {
      console.log("Error 404");
    }
  }
}
