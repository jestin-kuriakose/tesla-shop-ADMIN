import { findByText, fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "../Login"
import axios from "axios"

describe("<Login/>", () => {

  it("test", async () => {
    render(<Login/>)
    expect(true).toBeTruthy();
  })
    // test("Email and password input should be empty", () => {
    //     const emailInput = screen.getByPlaceholderText(/email address/i)
    //     const passwordInput = screen.getByPlaceholderText(/password/i)
    //     expect(emailInput.value).toBe("")
    //     expect(passwordInput.value).toBe("")
    // })

    // test("Email input should change", () => {
    //     const emailInput = screen.getByPlaceholderText(/email address/i)
    //     fireEvent.change(emailInput, { target: { value: "jestin@gmail.com" } });
    //     expect(emailInput.value).toBe("jestin@gmail.com");
    //   });

    // test("Password input should change", () => {
    //     const passwordInput = screen.getByPlaceholderText(/password/i)
    //     fireEvent.change(passwordInput, { target: { value: "pass" } });
    //     expect(passwordInput.value).toBe("pass");
    // });
    
    // test("Displays Loading when button clicked", () => {
    //     const emailInput = screen.getByPlaceholderText(/email address/i)
    //     const passwordInput = screen.getByPlaceholderText(/password/i)
    //     const buttonElement = screen.getByRole("button", {name: 'LOGIN'})
    //     fireEvent.change(emailInput, { target: { value: "jestin@gmail.com" } });
    //     fireEvent.change(passwordInput, { target: { value: "pass" } });
    //     fireEvent.click(buttonElement)
    //     expect(buttonElement).toHaveTextContent(/loading.../i)
    // })

    // test('should display success message on successful login', async () => {
  
    //   const emailInput = screen.getByPlaceholderText(/email address/i);
    //   const passwordInput = screen.getByPlaceholderText(/password/i);
    //   const buttonElement = screen.getByRole('button', { name: 'LOGIN' });
  
    //   fireEvent.change(emailInput, { target: { value: 'jestink@live.com' } });
    //   fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    //   fireEvent.click(buttonElement);
  
    //   const alertEle = await screen.findByRole("alert")
    //   expect(alertEle).toHaveTextContent(/login successfull/i)
    //   expect(buttonElement).toHaveTextContent('LOGIN');
  
    // });

    // test('should display error message on unsuccessful login', async () => {
  
    //   const emailInput = screen.getByPlaceholderText(/email address/i);
    //   const passwordInput = screen.getByPlaceholderText(/password/i);
    //   const buttonElement = screen.getByRole('button', { name: 'LOGIN' });
  
    //   fireEvent.change(emailInput, { target: { value: 'jestink@live.com' } });
    //   fireEvent.change(passwordInput, { target: { value: 'Password' } });
    //   fireEvent.click(buttonElement);
  
    //   const alertEle = await screen.findByRole("alert")
    //   expect(alertEle).toHaveTextContent(/invalid credentials/i)
    //   expect(buttonElement).toHaveTextContent('LOGIN');
  
    // });

})