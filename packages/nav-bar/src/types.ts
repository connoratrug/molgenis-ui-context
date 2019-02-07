export interface MenuItem {
    id: string
    label: string
    type: string
    params?: string
    items?: MenuItem[]
}

export interface MolgenisMenu {
  menu: MenuItem
  topLogo?: string
  topLogoMaxHeight?: number
  navBarLogo: string
  helpLink: {
    href: string
    label: string
  }
  authenticated: boolean
  selectedPlugin: string
  logoutFunction?: any,
  loginHref: string,
}
