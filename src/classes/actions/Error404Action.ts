import Action from "./Action";

export default class Error404Action extends Action {
  public execute() {
    console.log("Error 404 not found");
  }
}
