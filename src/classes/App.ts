import routing, { error404Action } from "../routing";

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

    let action = error404Action;

    for (let route of routing) {
      if (path === route.path) {
        action = route.action;
        break;
      }
    }

    action.execute();
  }
}
