import { render, screen, fireEvent } from "@testing-library/react-native";
import { router } from "expo-router";
import Login from "../../app/index";

jest.mock("expo-router", () => {
  router: {
    replace: jest.fn();
  }
});

describe("index", () => {
  describe("renders login screen", () => {
    it("renders the whole page", () => {
      render(<Login />);

      expect(
        screen.getAllByText("Please, sign up to fly with us!")
      ).toBeTruthy();

      expect(screen.getByPlaceholderText("Login")).toBeTruthy();
      expect(screen.getByPlaceholderText("Password")).toBeTruthy();

      expect(screen.getByRole("button")).toBeTruthy();
    });
  });

  describe("hooks are working", () => {
    it("update inputs value while typing", () => {
      render(<Login />);

      const loginInput = screen.getByPlaceholderText("Login");
      const passwordInput = screen.getByPlaceholderText("Password");

      fireEvent.changeText(loginInput, "fulano");
      fireEvent.changeText(passwordInput, "123");

      expect(loginInput.props.value).toBe("fulano");
      expect(passwordInput.props.value).toBe("123");
    });
  });

  describe("returns errors if incorrect user", () => {
    it("displays error message at incorrect user and password", () => {
      render(<Login />);

      const loginInput = screen.getByPlaceholderText("Login");
      const passwordInput = screen.getByPlaceholderText("Password");
      const loginButton = screen.getByRole("button");

      fireEvent.changeText(loginInput, "berratriz");
      fireEvent.changeText(passwordInput, "meee");
      fireEvent.press(loginButton);

      expect(screen.getByText("Invalid Login.")).toBeTruthy();
    });
  });

  describe("login authentication", () => {
    it("navigates to Listagem on successful login", () => {
      render(<Login />);

      const loginInput = screen.getByPlaceholderText("Login");
      const passwordInput = screen.getByPlaceholderText("Password");
      const loginButton = screen.getByRole("button");

      fireEvent.changeText(loginInput, "fulano");
      fireEvent.changeText(passwordInput, "123");

      fireEvent.press(loginButton);

      expect(router.replace).toHaveBeenCalledWith("/Listagem");
    });
  });
});