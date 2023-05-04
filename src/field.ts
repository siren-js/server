import { SirenElement } from './siren-element';

/**
 * Represents an input control inside an `Action`. Serialization of a `Field` depends on its `type` and its
 * corresponding `Action`'s `type`.
 */
export interface Field<T = unknown> extends SirenElement {
  /**
   * List of strings describing the nature of the `Field` based on the current representation. Possible values are
   * implementation-dependent and should be documented.
   */
  class?: string[];

  /**
   * Name describing the control. Must be unique within an `Action`.
   */
  name: string;

  /**
   * Textual annotation of a field. Clients may use this as a label.
   */
  title?: string;

  /**
   * Input type of the field. May include any of the [input types from HTML](https://html.spec.whatwg.org/multipage/input.html#attr-input-type).
   * When missing, the default is assumed to be `text`.
   */
  type?: string;

  /**
   * Value assigned to the `Field`.
   */
  value?: T;
}
