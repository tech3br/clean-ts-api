import { HttpResponse, HttpRequest } from "../protocols/http";

export class SignupController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error("Missing required param: name"),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error("Missing required param: email"),
      };
    }

    return httpRequest.body;
  }
}
