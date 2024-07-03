export const isProfilePage = (): boolean => {
  if (window.location.href.includes('/profile')) {
    return true
  }
  return false
}
export const isSignUpPage = (): boolean => {
  if (window.location.href.includes('/register')) {
    return true
  }
  return false
}