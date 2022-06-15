import { NextFunction, Request, Response } from "express";

const validationRegex: any = {
  email: {
    regex: "^[a-zA-Z-0-9]+@[a-zA-Z-0-9]+\\.[a-zA-Z-0-9]+$",
  },
};

export function validate(schema: any) {
  const validation = (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { body } = request;

    const errors: string[] = [];
    Object.keys(schema).forEach((key) => {
      if (schema[key].required && !body[key]) {
        errors.push(`${key} is required`);
      }

      if (schema[key].min && body[key] && body[key].length < schema[key].min) {
        errors.push(
          `${key} must be at least ${schema[key].min} characters long`
        );
      }
      if (schema[key].max && body[key] && body[key].length > schema[key].max) {
        errors.push(
          `${key} must be at most ${schema[key].max} characters long`
        );
      }

      if (
        validationRegex[key] &&
        body[key] &&
        !body[key].match(validationRegex[key].regex)
      ) {
        errors.push(`${key} must be a valid email`);
      }
    });

    if (errors.length) {
      return response.status(400).json({ type: "error", message: errors });
    }

    return next();
  };
  return validation;
}
