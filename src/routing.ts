import ContactAction from "./classes/actions/ContactAction";
import Error404Action from "./classes/actions/Error404Action";
import HomeAction from "./classes/actions/HomeAction";

export default [
  { path: "/", action: new HomeAction() },
  { path: "/contact", action: new ContactAction() },
];

export const error404Action = new Error404Action();
