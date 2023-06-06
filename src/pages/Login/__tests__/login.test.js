import { findByText, fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "../Login"
import axios from "axios"

describe("<Login/>", () => {

    test("Email and password input should be empty", () => {
        render(<Login/>)
        const emailInput = screen.getByPlaceholderText(/email address/i)
        const passwordInput = screen.getByPlaceholderText(/password/i)
        expect(emailInput.value).toBe("")
        expect(passwordInput.value).toBe("")
    })

    test("Email input should change", () => {
        render(<Login/>)
        const emailInput = screen.getByPlaceholderText(/email address/i)
        fireEvent.change(emailInput, { target: { value: "jestin@gmail.com" } });
        expect(emailInput.value).toBe("jestin@gmail.com");
      });

    test("Password input should change", () => {
        render(<Login/>)
        const passwordInput = screen.getByPlaceholderText(/password/i)
        fireEvent.change(passwordInput, { target: { value: "pass" } });
        expect(passwordInput.value).toBe("pass");
    });
    
    test("Displays Loading when button clicked", () => {
        render(<Login/>)
        const emailInput = screen.getByPlaceholderText(/email address/i)
        const passwordInput = screen.getByPlaceholderText(/password/i)
        const buttonElement = screen.getByRole("button", {name: 'LOGIN'})
        fireEvent.change(emailInput, { target: { value: "jestin@gmail.com" } });
        fireEvent.change(passwordInput, { target: { value: "pass" } });
        fireEvent.click(buttonElement)
        expect(buttonElement).toHaveTextContent(/loading.../i)
    })

    test('should display success message on successful login', async () => {
      render(<Login />);
  
      const emailInput = screen.getByPlaceholderText(/email address/i);
      const passwordInput = screen.getByPlaceholderText(/password/i);
      const buttonElement = screen.getByRole('button', { name: 'LOGIN' });
  
      fireEvent.change(emailInput, { target: { value: 'jestink@live.com' } });
      fireEvent.change(passwordInput, { target: { value: 'Password123' } });
      fireEvent.click(buttonElement);
  
      const alertEle = await screen.findByRole("alert")
      expect(alertEle).toHaveTextContent(/login successfull/i)
      expect(buttonElement).toHaveTextContent('LOGIN');
  
    });

    test('should display error message on unsuccessful login', async () => {
      render(<Login />);
  
      const emailInput = screen.getByPlaceholderText(/email address/i);
      const passwordInput = screen.getByPlaceholderText(/password/i);
      const buttonElement = screen.getByRole('button', { name: 'LOGIN' });
  
      fireEvent.change(emailInput, { target: { value: 'jestink@live.com' } });
      fireEvent.change(passwordInput, { target: { value: 'Password' } });
      fireEvent.click(buttonElement);
  
      const alertEle = await screen.findByRole("alert")
      expect(alertEle).toHaveTextContent(/invalid credentials/i)
      expect(buttonElement).toHaveTextContent('LOGIN');
  
    });

})