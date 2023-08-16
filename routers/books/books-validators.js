import { checkSchema } from "express-validator";

const postBook = () => {
  return [
    checkSchema(
      {
        name: {
          isString: {
            errorMessage: "Must be a string",
          },
          trim: true,
        },
        authorId: {
          isNumeric: {
            errorMessage: "Must be a number",
          },
        },
      },
      ["body"]
    ),
  ];
};

const bookValidators = {
  postBook: postBook,
};

export default bookValidators;
