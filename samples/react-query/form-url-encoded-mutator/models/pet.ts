/**
 * Generated by orval v6.19.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { PetCallingCode } from './petCallingCode';
import type { PetCountry } from './petCountry';

export interface Pet {
  '@id'?: string;
  callingCode?: PetCallingCode;
  country?: PetCountry;
  email?: string;
  id: number;
  name: string;
  tag?: string;
}
