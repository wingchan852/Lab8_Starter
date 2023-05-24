// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone number is (123)456-7890', () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});

test("phone number is 123-456-7890", () => {
  expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test("phone number is 123", () => {
  expect(functions.isPhoneNumber("123")).toBe(false);
});

test("phone number is 1234567890", () => {
  expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

test('email is abc9@ucsd.edu', () => {
    expect(functions.isEmail("abc9@ucsd.edu")).toBe(true);
});

test("email is chan@gamil.com", () => {
  expect(functions.isEmail("chan@gamil.com")).toBe(true);
});

test("email is chan@gamil.comm", () => {
  expect(functions.isEmail("chan@gamil.comm")).toBe(false);
});

test("email is chan@gamil.gmail.com", () => {
  expect(functions.isEmail("chan@gamil.gmail.com")).toBe(false);
});

test("password is abc123", () => {
    expect(functions.isStrongPassword("abc123")).toBe(true);
    });

test("password is abc123_mmm", () => {
    expect(functions.isStrongPassword("abc123_mmm")).toBe(true);
});

test("password is 11111a", () => {
    expect(functions.isStrongPassword("11111a")).toBe(false);
    });

test("password is abc", () => {
  expect(functions.isStrongPassword("abc")).toBe(false);
});

test("date is 1/12/2022", () => {
    expect(functions.isDate("1/12/2022")).toBe(true);
    });

test("date is 1/36/2022", () => {
    expect(functions.isDate("1/36/2022")).toBe(true);
});

test("date is 136/2022", () => {
  expect(functions.isDate("136/2022")).toBe(false);
});

test("date is 1/36/022", () => {
  expect(functions.isDate("1/36/022")).toBe(false);
});

test("color is #FF5733", () => {
  expect(functions.isHexColor("#FF5733")).toBe(true);
});

test("color is #FF", () => {
  expect(functions.isHexColor("#1F0F0C")).toBe(true);
});

test("color is #F", () => {
  expect(functions.isHexColor("#F")).toBe(false);
});

test("color is ##", () => {
  expect(functions.isHexColor("##")).toBe(false);
});
