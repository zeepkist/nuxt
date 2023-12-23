export enum UiNavigationMenuVisibility {
    Always = 'always',
    Collapsed = 'collapsed',
    UnCollapsed = 'uncollapsed'
}

interface UiNavigationMenuCommon {
    title: string
    subtitle?: string
    icon?: string
    visibility?: UiNavigationMenuVisibility
}

export interface UiNavigationMenuInternal extends UiNavigationMenuCommon {
    name: string
}

export interface UiNavigationMenuExternal extends UiNavigationMenuCommon {
    path: string
}

export interface UiNavigationMenuChildren extends UiNavigationMenuCommon {
    children: UiNavigationMenuRoot[]
}

export type UiNavigationMenuRoot =
    | UiNavigationMenuInternal
    | UiNavigationMenuExternal
    | UiNavigationMenuChildren
