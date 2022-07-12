import { SignupController } from "./signup";
import { MissingParamError } from "../errors/missing-param-error";

const makeSut = (): SignupController => {
  return new SignupController();
};

describe("Signup Controller", () => {
  test("should return 400 if no name is provided", () => {
    const sut = makeSut();
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
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "John",
        password: "123456",
        passwordConfirmation: "passwordConfirmation",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });

  test("should return 400 if no password is provided", () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "John",
        email: "john@example.com",
        passwordConfirmation: "passwordConfirmation",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
  });

  test("should return 400 if no password confirmation is provided", () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: "John",
        email: "john@example.com",
        password: "123456",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("passwordConfirmation")
    );
  });
});
