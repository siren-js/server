import { Field } from './field';
import { SirenElement } from './siren-element';

/**
 * Represents available behavior exposed by an `Entity`.
 */
export interface Action extends SirenElement {
  /**
   * List of strings describing the nature of the `Action` based on the current representation. Possible values are
   * implementation-dependent and should be documented.
   */
  class?: string[];

  /**
   * Input controls of the `Action`.
   */
  fields?: Field[];

  /**
   * URI of the action
   */
  href: string;

  /**
   * Protocol method used when submitting the `Action`. When missing, the default is assumed to be `'GET'`.
   */
  method?: string;

  /**
   * Name identifying the action to be performed. Must be unique within an `Entity`'s `actions`.
   */
  name: string;

  /**
   * Descriptive text about the `Action`.
   */
  title?: string;

  /**
   * Encoding type indicating how `fields` are serialized when submitting the `Action`. When missing, the default is
   * assumed to be `'application/x-www-form-urlencoded'`.
   */
  type?: string;
}
