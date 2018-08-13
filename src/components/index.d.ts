// <reference types="react"/>

export interface ImageProps {
  alt?: string;
  square?: boolean;
  ratio?:
    "1by1" |
    "5by4" |
    "4by3" |
    "3by2" |
    "5by3" |
    "16by9" |
    "2by1" |
    "3by1" |
    "4by5" |
    "3by4" |
    "2by3" |
    "3by5" |
    "9by16" |
    "1by2" |
    "1by3"
  ;
  is?:
    "16x16" |
    "24x24" |
    "32x32" |
    "48x48" |
    "64x64" |
    "96x96" |
    "128x128"
  ;
  src: string;
}

export interface BoxProps {
  className?: string;
}
export function Box(props: BoxProps): JSX.Element;

export interface ButtonProps {
  children: string | JSX.Element;
  className?: string;
  as?: JSX.Element;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  black?: boolean;
  danger?: boolean;
  dark?: boolean;
  info?: boolean;
  fullwidth?: boolean;
  light?: boolean;
  link?: boolean;
  outlined?: boolean;
  primary?: boolean;
  success?: boolean;
  text?: boolean;
  warning?: boolean;
  white?: boolean;
  inverted?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  loading?: boolean;
  rounded?: boolean;
  static?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;

export interface CardProps {
  className?: string;
}
export function Card(props: CardProps): JSX.Element;
export namespace Card {
  export interface CardImageProps extends ImageProps {
    className?: string;
  }
  export function Image(props: CardImageProps): JSX.Element;

  export interface CardContentProps {
    className?: string;
  }
  export function Content(props: CardContentProps): JSX.Element;

  export interface CardHeaderProps {
    className?: string;
  }
  export function Header(props: CardHeaderProps): JSX.Element;

  export namespace Header {
    export interface CardHeaderTitleProps {
      className?: string;
      as?: JSX.Element;
      centered?: boolean;
    }
    export function Title(props: CardHeaderTitleProps): JSX.Element;

    export interface CardHeaderIconProps {
      className?: string;
      children?: JSX.Element[] | JSX.Element;
    }
    export function Icon(props: CardHeaderIconProps): JSX.Element;
  }

  export interface CardFooter {
    className?: string;
  }
  export function Footer(props: CardFooter): JSX.Element;

  export namespace Footer {
    export interface CardFooterItemProps {
      className?: string;
    }
    export function Item(props: CardFooterItemProps): JSX.Element;
  }
}

export interface CheckboxProps {
  className?: string;
  as?: JSX.Element;
  children?: JSX.Element[] | JSX.Element;
}
export function Checkbox(props: CheckboxProps): JSX.Element;

export interface ContainerProps {
  className?: string;
  fluid?: boolean;
  hasTextCentered?: boolean;
}
export function Container(props: ContainerProps): JSX.Element;

export interface ContentProps {
  className?: string;
  children?: JSX.Element;
  html?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}
export function Content(props: ContentProps): JSX.Element;

export interface ControlProps {
  className?: string;
  as?: JSX.Element;
  hasIconsLeft?: boolean;
  hasIconsRight?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  loading?: boolean;
}
export function Control(props: ControlProps): JSX.Element;

export interface DeleteProps {
  className?: string;
  as?: JSX.Element;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}
export function Delete(props: DeleteProps): JSX.Element;

export interface FieldProps {
  className?: string;
  hasAddons?: boolean;
  grouped?: boolean;
  groupedCentered?: boolean;
  groupedRight?: boolean;
}
export function Field(props: FieldProps): JSX.Element;

export interface FileProps {
  className?: string;
  boxed?: boolean;
  centered?: boolean;
  danger?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  fullwidth?: boolean;
  info?: boolean;
  name?: boolean;
  primary?: boolean;
  right?: boolean;
  warning?: boolean;
}
export function File(props: FileProps): JSX.Element;
export namespace File {
  export interface FileCtaProps {
    className?: string;
  }
  export function Cta(props: FileCtaProps): JSX.Element;

  export interface FileIconProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Icon(props: FileIconProps): JSX.Element;

  export interface FileInputProps {
    className?: string;
  }
  export function Input(props: FileInputProps): JSX.Element;

  export interface FileLabelProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Label(props: FileLabelProps): JSX.Element;

  export interface FileNameProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Name(props: FileNameProps): JSX.Element;
}

export interface HeadingProps {
  className?: string;
  as?: JSX.Element;
}
export function Heading(props: HeadingProps): JSX.Element;

export interface HeroProps {
  className?: string;
  as?: JSX.Element;
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  bold?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  fullheight?: boolean;
}
export function Hero(props: HeroProps): JSX.Element;
export namespace Hero {
  export interface HeroHeadProps {
    className?: string;
  }
  export function Head(props: HeroHeadProps): JSX.Element;

  export interface HeroBodyProps {
    className?: string;
  }
  export function Body(props: HeroBodyProps): JSX.Element;

  export interface HeroFootProps {
    className?: string;
  }
  export function Foot(props: HeroFootProps): JSX.Element;
}

export interface IconProps {
  className?: string;
  as?: JSX.Element;
  left?: boolean;
  right?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}
export function Icon(props: IconProps): JSX.Element;

export function Image(props: ImageProps): JSX.Element;

export interface InputProps {
  className?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  danger?: boolean;
  focused?: boolean;
  hovered?: boolean;
  info?: boolean;
  loading?: boolean;
  primary?: boolean;
  success?: boolean;
  type: string;
  warning?: boolean;
  rounded?: boolean;
}
export function Input(props: InputProps): JSX.Element;

export interface LevelProps {
  className?: string;
  as?: JSX.Element;
  mobile?: boolean;
}
export function Level(props: LevelProps): JSX.Element;
export namespace Level {
  export interface LevelItemProps {
    className?: string;
    hasTextCentered?: boolean;
  }
  export function Item(props: LevelItemProps): JSX.Element;

  export interface LevelLeftProps {
    className?: string;
  }
  export function Left(props: LevelLeftProps): JSX.Element;

  export interface LevelRightProps {
    className?: string;
  }
  export function Right(props: LevelRightProps): JSX.Element;
}

export interface LinkProps {
  className?: string;
  as?: JSX.Element;
}
export function Link(props: LinkProps): JSX.Element;

export interface MediaProps {
  className?: string;
  as?: JSX.Element;
}
export function Media(props: MediaProps): JSX.Element;
export namespace Media {
  export interface MediaContentProps {
    className?: string;
  }
  export function Content(props: MediaContentProps): JSX.Element;

  export interface MediaLeftProps {
    className?: string;
  }
  export function Left(props: MediaLeftProps): JSX.Element;

  export interface MediaRightProps {
    className?: string;
  }
  export function Right(props: MediaRightProps): JSX.Element;
}

export interface MessageProps {
  className?: string;
  as?: JSX.Element;
  dark?: boolean;
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  medium?: boolean;
  large?: boolean;
}
export function Message(props: MessageProps): JSX.Element;
export namespace Message {
  export interface MessageBodyProps {
    className?: string;
  }
  export function Body(props: MessageBodyProps): JSX.Element;

  export interface MessageHeaderProps {
    className?: string;
  }
  export function Header(props: MessageHeaderProps): JSX.Element;
}

export interface NavProps {
  className?: string;
  as?: JSX.Element;
  hasShadow?: boolean;
}
export function Nav(props: NavProps): JSX.Element;
export namespace Nav {
  export interface NavCenterProps {
    className?: string;
    menu?: boolean;
  }
  export function Center(props: NavCenterProps): JSX.Element;

  export interface NavLeftProps {
    className?: string;
    menu?: boolean;
  }
  export function Left(props: NavLeftProps): JSX.Element;

  export interface NavRightProps {
    className?: string;
    menu?: boolean;
  }
  export function Right(props: NavRightProps): JSX.Element;

  export interface NavItemProps {
    className?: string;
    as?: JSX.Element;
    active?: boolean;
    tab?: boolean;
    hiddenTablet?: boolean;
    hiddenMobile?: boolean;
  }
  export function Item(props: NavItemProps): JSX.Element;

  export interface NavToggleProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Toggle(props: NavToggleProps): JSX.Element;
}

export interface NotificationProps {
  className?: string;
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  medium?: boolean;
  large?: boolean;
}
export function Notification(props: NotificationProps): JSX.Element;

export interface PanelProps {
  className?: string;
  as?: JSX.Element;
}
export function Panel(props: PanelProps): JSX.Element;
export namespace Panel {
  export interface PanelBlockProps {
    className?: string;
    as?: JSX.Element;
    active?: boolean;
    label?: boolean;
  }
  export function Block(props: PanelBlockProps): JSX.Element;

  export interface PanelHeadingProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Heading(props: PanelHeadingProps): JSX.Element;

  export interface PanelIconProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Icon(props: PanelIconProps): JSX.Element;

  export interface PanelTabsProps {
    className?: string;
    as?: JSX.Element;
  }
  export function Tabs(props: PanelTabsProps): JSX.Element;

  export interface PanelTabProps {
    className?: string;
    as?: JSX.Element;
    active?: boolean;
  }
  export function Tab(props: PanelTabProps): JSX.Element;
}

export interface ProgressProps {
  className?: string;
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  value?: number | string;
  max?: number | string;
}
export function Progress(props: ProgressProps): JSX.Element;

export interface SectionProps {
  className?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}
export function Section(props: SectionProps): JSX.Element;

export interface TableProps {
  className?: string;
  bordered?: boolean;
  hoverable?: boolean;
  narrow?: boolean;
  striped?: boolean;
}
export function Table(props: TableProps): JSX.Element;
export namespace Table {
  export interface TableHeadProps {}
  export function Head(props: TableHeadProps): JSX.Element;

  export interface TableFootProps {}
  export function Foot(props: TableFootProps): JSX.Element;

  export interface TableBodyProps {}
  export function Body(props: TableBodyProps): JSX.Element;

  export interface TableTrProps {
    className?: string;
    selected: boolean;
  }
  export function Tr(props: TableTrProps): JSX.Element;

  export interface TableTdProps {}
  export function Td(props: TableTdProps): JSX.Element;

  export interface TableThProps {}
  export function Th(props: TableThProps): JSX.Element;
}

export interface TabsProps {
  className?: string;
  right?: boolean;
  centered?: boolean;
  boxed?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  fullwidth?: boolean;
  toggle?: boolean;
}
export function Tabs(props: TabsProps): JSX.Element;

export interface TagProps {
  className?: string;
  as?: JSX.Element;
  medium?: boolean;
  large?: boolean;
  black?: boolean;
  dark?: boolean;
  light?: boolean;
  white?: boolean;
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
}
export function Tag(props: TagProps): JSX.Element;

export interface TextareaProps {
  as?: JSX.Element;
  className?: string;
  children?: JSX.Element;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  hovered?: boolean;
  focused?: boolean;
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
}
export function Textarea(props: TextareaProps): JSX.Element;

export interface TitleProps {
  as: JSX.Element;
  className: string;
  spaced: boolean;
  is: "1" | "2" | "3" | "4" | "5" | "6";
}
export function Title(props: TitleProps): JSX.Element;
export namespace Title {
  export interface SubTitleProps {
    as: JSX.Element;
    className: string;
    spaced: boolean;
    is: "1" | "2" | "3" | "4" | "5" | "6";
  }
  export function SubTitle(props: SubTitleProps): JSX.Element;
}
