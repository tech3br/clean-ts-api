export class SignupController {
  handle(httpRequest: any): any {
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
  }
}
