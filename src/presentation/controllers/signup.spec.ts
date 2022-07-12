import { SignupController } from "./signup";
import { MissingParamError } from "../errors/missing-param-error";

describe("Signup Controller", () => {
  test("should return 400 if no name is provided", () => {
    const sut = new SignupController();
    const httpRequest = {
      body: {
        email: "john@example.com",
        password: "123456",
        passwordConfirmation: "passwordConfirmation",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toEqual(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  test("should return 400 if no email is provided", () => {
    const sut = new SignupController();
    const httpRequest = {
      body: {
        name: "john@example.com",
        password: "123456",
        passwordConfirmation: "passwordConfirmation",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });
});
