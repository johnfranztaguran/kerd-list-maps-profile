// testId - iOS , accessibilityLabel - Android
export const testIdProps = (id: string) => {
  const appiumTestId = id.toLowerCase().replace(/\s+/g, '-')
  return {
    accessible: true,
    testID: appiumTestId,
    accessibilityLabel: appiumTestId
  }
}
