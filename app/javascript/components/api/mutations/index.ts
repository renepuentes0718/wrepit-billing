import { gql } from '@apollo/client'

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(input: {email: $email}){
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $email: String,
    $phone: String,
    $firstName: String,
    $lastName: String,
  ) {
    updateUser(
      input: {
        email: $email,
        phone: $phone,
        lastName: $lastName,
        firstName: $firstName,
      }
    ){
      email,
      phone,
      lastName,
      firstName,
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation SigninUser(
    $email: String!,
    $password: String!,
  ) {
    signinUser(
      input: {
        email: $email,
        password: $password,
      }
    ){
      id
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!,
    $password: String!,
    $phone: String!,
    $firstName: String!,
    $lastName: String!,
  ) {
    registerUser(
      input: {
        email: $email,
        password: $password,
        phone: $phone,
        lastName: $lastName,
        firstName: $firstName,
      }
    ){
      lastName
      firstName
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LogoutUser($email: String!) {
    logoutUser(input: {email: $email}){
      email
    }
  }
`;

export const CONFIRM_USER = gql`
  mutation ConfirmUser($confirmationToken: String!) {
    confirmUser(
      input: {
        confirmationToken: $confirmationToken,
      }
    ){
      id
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword(
    $resetPasswordToken: String!,
    $password: String!
  ) {
      resetPassword(input: {
        resetPasswordToken: $resetPasswordToken,
        password: $password
      }){
        email
      }
    }
`;

export const SEND_VERIFICATION_CODE = gql`
  mutation SendVerificationCode($phone: String!) {
    sendVerificationCode(phone: $phone) {
      success
    }
  }
`;

export const VERIFY_CODE = gql`
  mutation VerifyCode($phone: String!, $code: String!) {
    verifyCode(phone: $phone, code: $code) {
      success
    }
  }
`;
// TODO: after all milestone 
// export const UPLOAD_IMAGE = gql`
//   mutation UploadImage($image: Upload!) {
//     uploadImage(image: $image) {
//       user {
//         id
//         imageUrl
//       }
//     }
//   }
// `;
