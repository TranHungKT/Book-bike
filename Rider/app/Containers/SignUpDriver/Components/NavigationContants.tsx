export const NavigationConstants: NavigationType[] = [
  {
    title: 'uploadProfile',
    screenName: 'ProfilePhotoScreen'
  },
  {
    title: 'uploadIdentify',
    screenName: 'IdentifyScreen'
  },
  {
    title: 'uploadLicense',
    screenName: 'LicenseScreen'
  },
  {
    title: 'uploadBikeInfor',
    screenName: 'BikeInforScreen'
  },
  {
    title: 'uploadBike',
    screenName: 'BikePhotoScreen'
  }
]

export type NavigationType = {
  title: string
  screenName: string
}
