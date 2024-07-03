import { gql } from '@apollo/client'

export const CURRENT_USER = gql`
query CurrentUser {
  currentUser{
    email
    firstName
    lastName
    phone
    imageUrl
    fullName
  }
}
`;

// export const CURRENT_OMNI_AUTH_USER = gql`
// mutation GoogleAuth ($uid: String!, $provider: String!){
//   googleAuth(input: {uid: $uid, provider: $provider}){
//     user{
//       email
//     }
//   }
// }
// `;