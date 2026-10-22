import type { ThemeConfig } from 'antd';
import { theme as antdTheme } from 'antd';
import darkTokens from '../tokens/dark.json';
import lightTokens from '../tokens/light.json';

// Builds antd themes from the Figma variable exports in tokens/.
// Re-exporting from Figma only means replacing those JSON files.

export type Mode = 'light' | 'dark';

type FigmaAlias = { color: { type: string; id: string }; opacity: number };
type TokenValue = string | number | FigmaAlias | null;
type TokenMap = Record<string, TokenValue>;
type TokenFile = { token: TokenMap; components: Record<string, TokenMap> };

// Figma exports references to other variables by ID. Map each ID to the token it points at.
// VariableID:26033:37175 is used for transparent fills (0% opacity) and the focus ring
// (controlOutline, 10% light / 15% dark); it is assumed to be the primary colour.
const aliases: Record<string, string> = {
  'VariableID:26033:37175': 'colorPrimary',
};

const fallbacks: Record<string, string> = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontFamilyCode: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
};

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function resolve(key: string, value: TokenValue, file: TokenFile): string | number | undefined {
  // Unset variables export as null; leave them to antd's default.
  if (value === null) return undefined;
  if (typeof value === 'object') {
    const target = aliases[value.color.id];
    const color = target && file.token[target];
    if (typeof color !== 'string') {
      console.warn(`[theme] Unknown Figma variable ${value.color.id} for "${key}"; using the antd default.`);
      return undefined;
    }
    return hexToRgba(color, Math.round(value.opacity) / 100);
  }
  if (typeof value === 'string' && key in fallbacks) {
    return `'${value}', ${fallbacks[key]}`;
  }
  return value;
}

function normalize(tokens: TokenMap, file: TokenFile) {
  const result: Record<string, string | number> = {};
  for (const [rawKey, value] of Object.entries(tokens)) {
    // Figma groups palette colours as "blue.1"; antd names them "blue1".
    const key = rawKey.replace(/^([a-z]+)\.(\d+)$/, '$1$2');
    const resolved = resolve(key, value, file);
    if (resolved !== undefined) result[key] = resolved;
  }
  return result;
}

function buildTheme(file: TokenFile, algorithm: ThemeConfig['algorithm']): ThemeConfig {
  return {
    algorithm,
    token: normalize(file.token, file),
    components: Object.fromEntries(
      Object.entries(file.components).map(([name, tokens]) => [name, normalize(tokens, file)]),
    ),
  };
}

export const themes: Record<Mode, ThemeConfig> = {
  light: buildTheme(lightTokens, antdTheme.defaultAlgorithm),
  dark: buildTheme(darkTokens, antdTheme.darkAlgorithm),
};

export const antdDefaultThemes: Record<Mode, ThemeConfig> = {
  light: { algorithm: antdTheme.defaultAlgorithm },
  dark: { algorithm: antdTheme.darkAlgorithm },
};
