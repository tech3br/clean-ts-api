import { SignupController } from "./signup";

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
  });
});
