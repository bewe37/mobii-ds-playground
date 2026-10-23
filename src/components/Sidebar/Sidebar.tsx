import { useContext, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import { UpOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex, Menu, theme as antdTheme, type MenuProps } from 'antd';
import { typography } from '../../theme';
import logoMarkDark from './assets/logo-mark-dark.svg';
import logoMarkLight from './assets/logo-mark-light.svg';
import logoWordmarkDark from './assets/logo-wordmark-dark.svg';
import logoWordmarkLight from './assets/logo-wordmark-light.svg';
import toggleDark from './assets/sidebar-toggle-dark.svg';
import toggleLight from './assets/sidebar-toggle-light.svg';
import upDownDark from './assets/updown-dark.svg';
import upDownLight from './assets/updown-light.svg';
import './Sidebar.css';

// Prism "Menu" sidebar (Figma node 1213:28650): logo header, inline antd Menu, and a
// footer row for the signed-in user and current dataset.

export type SidebarTheme = 'light' | 'dark';

export type SidebarProps = {
  items: MenuProps['items'];
  theme?: SidebarTheme;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Width when expanded; collapsed width comes from the Menu `collapsedWidth` token. */
  width?: number;
  /** Shown above the user in the footer; falls back to the tenant name. */
  datasetLabel?: string;
  tenantName: string;
  tenantLogo: ReactNode;
  tenantColor: string;
  userName: string;
  /** Called when the footer row is pressed, e.g. to open an account or dataset switcher. */
  onUserMenuClick?: () => void;
  menuProps?: Omit<MenuProps, 'items' | 'mode' | 'theme' | 'inlineCollapsed'>;
};

type Tokens = Record<string, string | number>;

// Our Figma exports add tokens antd doesn't know (footerTextColor, darkColorSplit, ...),
// so read the component tokens straight from the theme config.
function useComponentTokens(name: string): Tokens {
  const { theme } = useContext(ConfigProvider.ConfigContext);
  return ((theme?.components as Record<string, Tokens> | undefined)?.[name] ?? {}) as Tokens;
}

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(reducedMotionQuery);
      query.addEventListener('change', onChange);
      return () => query.removeEventListener('change', onChange);
    },
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

export function Sidebar({
  items,
  theme = 'light',
  collapsed = false,
  onCollapsedChange,
  width = 280,
  datasetLabel,
  tenantName,
  tenantLogo,
  tenantColor,
  userName,
  onUserMenuClick,
  menuProps,
}: SidebarProps) {
  const { token } = antdTheme.useToken();
  const menu = useComponentTokens('Menu');
  const dark = theme === 'dark';

  const footerText = (dark ? menu.darkFooterTextColor : menu.footerTextColor) as string;
  const footerSecondaryText = (dark ? menu.darkFooterSecondaryTextColor : menu.footerSecondaryTextColor) as string;
  const subItemIndent = Number(menu.itemPaddingInline) + Number(menu.iconSize) + Number(menu.iconMarginInlineEnd);

  // antd swaps the Menu to its collapsed layout the moment inlineCollapsed flips. Keep it
  // inline while the width animates (icons already sit where the rail needs them), then
  // hand over once the sidebar has settled.
  const reducedMotion = usePrefersReducedMotion();
  const animates = token.motion && !reducedMotion;
  const [animating, setAnimating] = useState(false);
  const [prevCollapsed, setPrevCollapsed] = useState(collapsed);
  const [openKeys, setOpenKeys] = useState<string[]>(menuProps?.defaultOpenKeys ?? []);
  const [popupKeys, setPopupKeys] = useState<string[]>([]);
  if (collapsed !== prevCollapsed) {
    setPrevCollapsed(collapsed);
    setAnimating(animates);
    setPopupKeys([]);
  }
  const menuCollapsed = collapsed && !animating;
  // Inline submenus close (with antd's own height motion) as the sidebar narrows, and reopen on expand.
  const mergedOpenKeys = !collapsed ? openKeys : menuCollapsed ? popupKeys : [];

  const borderWidth = Number(menu.activeBarBorderWidth);
  const innerWidth = width - borderWidth;
  // Everything lines up on the menu icons: left edges at iconInset expanded, centred on the
  // icon column when collapsed, and trailing glyphs end at the same inset from the right.
  const iconInset = token.marginXS + Number(menu.itemPaddingInline);
  const iconCenter = iconInset + Number(menu.iconSize) / 2;
  const logoButton = token.controlHeight;
  const logoInset = iconInset - (logoButton - 21) / 2;
  const collapsedLogoInset = iconCenter - logoButton / 2;
  const itemPadding = Number(menu.itemPaddingInline);
  const avatarSize = token.controlHeightLG;
  const collapsedAccountPadding = iconCenter - avatarSize / 2 - token.marginXS;
  const secondaryLabel = datasetLabel ?? tenantName;

  const rootStyle = {
    width: collapsed ? menu.collapsedWidth : width,
    height: '100%',
    boxSizing: 'border-box',
    fontFamily: token.fontFamily,
    background: dark ? menu.darkItemBg : menu.itemBg,
    borderInlineEnd: `${borderWidth}px solid ${dark ? menu.darkColorSplit : menu.colorSplit}`,
    fontWeight: (token as unknown as Tokens).fontWeightNormal,
    letterSpacing: typography.style.letterSpacing,
    '--sidebar-sub-indent': `${subItemIndent}px`,
    '--sidebar-item-padding': `${menu.itemPaddingInline}px`,
    '--sidebar-dark-submenu-selected': menu.darkItemColor,
    '--sidebar-account-hover-bg': dark ? menu.darkItemHoverBg : menu.itemHoverBg,
    '--sidebar-hover-duration': token.motionDurationSlow,
    '--sidebar-focus-ring': `${token.lineWidthFocus}px solid ${token.colorPrimaryBorder}`,
    // antd motion tokens, on the quick end: a strong ease-out so the edge moves the instant you click.
    '--sidebar-duration': token.motionDurationMid,
    '--sidebar-duration-fast': token.motionDurationFast,
    '--sidebar-ease': token.motionEaseOutQuint,
    '--sidebar-fade-ease': token.motionEaseOut,
  } as CSSProperties;

  const mark = <img src={dark ? logoMarkDark : logoMarkLight} width={21} height={16} alt="" />;

  return (
    <Flex
      vertical
      className="sidebar"
      data-collapsed={collapsed || undefined}
      data-animating={animating || undefined}
      style={rootStyle}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && e.propertyName === 'width') setAnimating(false);
      }}
    >
      {/* Rows keep their expanded width so the closing edge clips them instead of reflowing them. */}
      <Flex
        align="center"
        className="sidebar-header"
        style={{
          width: innerWidth,
          boxSizing: 'border-box',
          flexShrink: 0,
          // 72px tall expanded, 48px collapsed (around the 32px logo button), easing with the width
          // so the menu below slides up rather than jumping.
          paddingBlock: collapsed ? token.paddingXS : token.paddingMD,
          // Figma's "Divider Horizontal" under the logo: no colour, but it takes up 1px.
          borderBottom: `${token.lineWidth}px solid transparent`,
          paddingInlineStart: collapsed ? collapsedLogoInset : logoInset,
          paddingInlineEnd: token.paddingSM,
        }}
      >
        <Button
          type="text"
          className="sidebar-logo"
          icon={mark}
          aria-label={collapsed ? 'Expand sidebar' : undefined}
          aria-hidden={collapsed ? undefined : true}
          tabIndex={collapsed ? 0 : -1}
          onClick={collapsed ? () => onCollapsedChange?.(false) : undefined}
        />
        <img className="sidebar-fade" src={dark ? logoWordmarkDark : logoWordmarkLight} width={50} height={16} alt="Code" />
        <Button
          type="text"
          className="sidebar-fade"
          aria-label="Collapse sidebar"
          aria-hidden={collapsed || undefined}
          tabIndex={collapsed ? -1 : 0}
          icon={<img src={dark ? toggleDark : toggleLight} width={16} height={16} alt="" />}
          onClick={() => onCollapsedChange?.(true)}
          style={{ marginInlineStart: 'auto' }}
        />
      </Flex>

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              // The design insets items by marginXS and gives open submenus the item background.
              itemMarginInline: token.marginXS,
              subMenuItemBg: menu.itemBg as string,
              darkSubMenuItemBg: menu.darkItemBg as string,
              activeBarBorderWidth: 0,
            },
          },
        }}
      >
        <Menu
          mode="inline"
          theme={theme}
          inlineCollapsed={menuCollapsed}
          inlineIndent={Number(menu.itemPaddingInline)}
          expandIcon={menuCollapsed ? () => null : ({ isOpen }) => <UpOutlined className="sidebar-chevron" rotate={isOpen ? 0 : 180} style={{ fontSize: token.fontSizeIcon }} />}
          items={items}
          {...menuProps}
          openKeys={mergedOpenKeys}
          onOpenChange={(keys) => {
            (menuCollapsed ? setPopupKeys : setOpenKeys)(keys);
            menuProps?.onOpenChange?.(keys);
          }}
          // No padding of its own: the items' itemMarginBlock already gives Figma's 4px above the first one.
          style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'transparent', ...menuProps?.style }}
        />
      </ConfigProvider>

      <div className="sidebar-footer" style={{ flexShrink: 0, padding: token.marginXS }}>
        {/* One pressable row, styled like a menu item. Its padding eases between states: to 0 at the
            sides so the avatar centres on the icon column, and down to Figma's collapsed spacing. */}
        <button
          type="button"
          className="sidebar-account"
          aria-label={`${userName}, ${secondaryLabel}`}
          onClick={onUserMenuClick}
          style={{
            width: '100%',
            // With the footer's own marginXS: 8px around the row expanded, 12px above the avatar collapsed.
            paddingBlock: collapsed ? token.paddingXXS : token.paddingXS,
            paddingInline: collapsed ? collapsedAccountPadding : itemPadding,
            borderRadius: Number(menu.itemBorderRadius),
          }}
        >
          <Flex align="center" gap={token.paddingSM} style={{ width: innerWidth - 2 * iconInset, flexShrink: 0 }}>
            <Flex align="center" gap={token.marginXS} style={{ flex: 1, minWidth: 0 }}>
              {/* Not antd Avatar: it stretches images to fill, and the tenant mark keeps its own size. */}
              <Flex
                align="center"
                justify="center"
                aria-hidden
                style={{ width: avatarSize, height: avatarSize, background: tenantColor, borderRadius: '50%', flexShrink: 0 }}
              >
                {tenantLogo}
              </Flex>
              <Flex vertical className="sidebar-fade" aria-hidden style={{ flex: 1, minWidth: 0, textAlign: 'start' }}>
                <span className="sidebar-ellipsis" style={{ color: footerSecondaryText, fontSize: token.fontSizeSM, lineHeight: '20px' }}>
                  {secondaryLabel}
                </span>
                <span className="sidebar-ellipsis" style={{ color: footerText, fontSize: token.fontSize, lineHeight: '20px' }}>
                  {userName}
                </span>
              </Flex>
            </Flex>
            <img className="sidebar-fade" src={dark ? upDownDark : upDownLight} width={20} height={20} alt="" />
          </Flex>
        </button>
      </div>
    </Flex>
  );
}
