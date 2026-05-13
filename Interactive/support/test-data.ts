import { UserRegistration } from "../pages/auth.page";

export function createUser(): UserRegistration {
  const uniqueValue = Date.now();

  return {
    name: `Endurance ${uniqueValue}`,
    email: `endurance.${uniqueValue}@mailinator.com`,
    password: "Password123!",
    firstName: "Endurance",
    lastName: "Tester",
    address: "10 Practice Street",
    country: "India",
    state: "Lagos",
    city: "Ikeja",
    zipCode: "100001",
    mobileNumber: "08012345678"
  };
}
