import { JsonController, Get } from "routing-controllers";
import School from "./entity";

@JsonController()
export default class SchoolController {
  @Get("/schools")
  allEvents() {
    const schools = School.find();

    return {
      schools
    };
  }
}
