import { render } from "preact";
import { App } from "./app";
import { installCourseAuth } from "./course-auth";
import "./styles.css";

installCourseAuth();
render(<App />, document.getElementById("app")!);
