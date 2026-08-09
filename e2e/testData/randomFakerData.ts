import { faker } from "@faker-js/faker";
import { EmployeeDetails } from "../testData/dataInterface";

export function getRandomEmployeeDetails():EmployeeDetails{
    return{
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        employeeId: faker.number.int(10000).toString()

    }
}