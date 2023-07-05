/* eslint-disable @typescript-eslint/no-namespace */
import { Platform } from './Utils.js';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: DashProps;
    }
  }
}

export interface DashProps {
    [key: string]: unknown,
    children?: (DashNode | (DashNode | Promise<DashNode | DashNode[]>)[] | Promise<DashNode | DashNode[]>)[]
}

export interface DashNode {
    type: string,
    props: DashProps,
}

function normalizeTag(tag: string) {
  if (tag === 'mpd') return 'MPD';
  if (tag === 'base-url') return 'BaseURL';

  const sections = tag.split('-');
  return sections.map((section) => section.charAt(0).toUpperCase() + section.slice(1)).join('');
}

export function createElement(
  tagNameOrFunction: string | ((props: DashProps) => DashNode | Promise<DashNode>),
  props: { [key: string] : unknown } | null | undefined,
  ...children: (DashNode | string)[]
): DashNode | Promise<DashNode> {
  const normalizedChildren = children.flat().map((child) => typeof child === 'string' ? createTextElement(child) : child);

  if (typeof tagNameOrFunction === 'function') {
    return tagNameOrFunction({ ...props, children: normalizedChildren });
  }

  return {
    type: normalizeTag(tagNameOrFunction),
    props: {
      ...props,
      children: normalizedChildren
    }
  };
}

export function createTextElement(text: string): DashNode {
  return {
    type: 'TEXT_ELEMENT',
    props: { nodeValue: text }
  };
}

async function render2(element: DashNode, document: Document): Promise<HTMLElement | Text> {
  if (element.type === 'TEXT_ELEMENT')
    return document.createTextNode(typeof element.props.nodeValue === 'string' ? element.props.nodeValue : '');

  const dom = document.createElement(element.type);

  if (element.props)
    Object.keys(element.props)
      .filter((key) => ![ 'children', 'nodeValue' ].includes(key) && element.props[key] !== undefined)
      .forEach((name) => (dom as HTMLElement).setAttribute(name, `${element.props[name]}`));

  if (element.props.children) {
    await Promise.all((await Promise.all(element.props.children.flat())).flat().map((child) => render(child, dom)));
  }

  return dom;
}

export async function render(element: DashNode | Promise<DashNode>, container: HTMLElement) {
  const dom = render2(await element, container.ownerDocument);
  container.appendChild(await dom);
}


export async function serialize(element: DashNode | Promise<DashNode>): Promise<string> {
  const document = new Platform.shim.DOMParser().parseFromString('<?xml version="1.0" encoding="utf-8"?><PLACEHOLDER />', 'application/xml');
  const dom = await render2(await element, document);
  document.replaceChild(dom, document.documentElement);

  return Platform.shim.serializeDOM(document);
}

export function Fragment(props: DashProps) {
  return props.children;
}
