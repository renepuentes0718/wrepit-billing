export const isProfilePage = (): boolean => {
  if (window.location.href.includes('/profile')) {
    return true
  }
  return false
}