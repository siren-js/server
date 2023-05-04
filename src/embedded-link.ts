import { SirenElement } from './siren-element';

/**
 * Represent a sub-entity as a link
 */
export interface EmbeddedLink extends SirenElement {
  /**
   * List of strings describing the nature of the `Link` based on the current representation. Possible values are
   * implementation-dependent and should be documented.
   */
  class?: string[];

  /**
   * URI of the linked resource.
   */
  href: string;

  /**
   * List of strings describing the relationship of the `Link` to its `Entity`, per [RFC 8288](https://tools.ietf.org/html/rfc8288).
   */
  rel: string[];

  /**
   * Text describing the nature of the link.
   */
  title?: string;

  /**
   * Hint indicating what the media type of the result of dereferencing the `Link` should be, per [RFC 8288](https://tools.ietf.org/html/rfc8288#section-3.4.1).
   */
  type?: string;
}
