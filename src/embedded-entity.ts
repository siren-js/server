import { Action } from './action';
import { Link } from './link';
import { SirenElement } from './siren-element';
import { SubEntity } from './sub-entity';

/**
 * Represents an embedded URI-addressable resource
 */
export interface EmbeddedEntity<T extends object = object> extends SirenElement {
  /**
   * Available behavior exposed by the `Entity`
   */
  actions?: Action[];

  /**
   * List of strings describing the nature of the `Entity` based on the current representation. Possible values are
   * implementation-dependent and should be documented.
   */
  class?: string[];

  /**
   * Related entities represented as embedded links or representations
   */
  entities?: SubEntity[];

  /**
   * Navigation links that communicate ways to navigate outside the entity graph
   */
  links?: Link[];

  /**
   * Key-value pairs describing the state of the `Entity`
   */
  properties?: T;

  /**
   * List of strings describing the relationship of the `EmbeddedEntity` to its parent, per [RFC 8288](https://tools.ietf.org/html/rfc8288).
   */
  rel: string[];

  /**
   * Descriptive text about the `Entity`
   */
  title?: string;
}
