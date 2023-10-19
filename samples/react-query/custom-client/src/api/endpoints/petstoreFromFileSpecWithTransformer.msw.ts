/**
 * Generated by orval v6.19.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const getListPetsMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    '@id': faker.helpers.arrayElement([faker.word.sample(), undefined]),
    callingCode: faker.helpers.arrayElement([
      faker.helpers.arrayElement(['+33', '+420', '+33']),
      undefined,
    ]),
    country: faker.helpers.arrayElement([
      faker.helpers.arrayElement(["People's Republic of China", 'Uruguay']),
      undefined,
    ]),
    email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
    id: (() => faker.number.int({ min: 1, max: 99999 }))(),
    name: (() => faker.person.lastName())(),
    tag: (() => faker.person.lastName())(),
  }));

export const getCreatePetsMock = () => ({
  '@id': faker.helpers.arrayElement([faker.word.sample(), undefined]),
  callingCode: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['+33', '+420', '+33']),
    undefined,
  ]),
  country: faker.helpers.arrayElement([
    faker.helpers.arrayElement(["People's Republic of China", 'Uruguay']),
    undefined,
  ]),
  email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
  id: faker.number.int({ min: undefined, max: undefined }),
  name: (() => faker.person.lastName())(),
  tag: (() => faker.person.lastName())(),
});

export const getShowPetByIdMock = () =>
  (() => ({
    id: faker.number.int({ min: 1, max: 99 }),
    name: faker.person.firstName(),
    tag: faker.helpers.arrayElement([faker.word.sample(), void 0]),
  }))();

export const getSwaggerPetstoreMSW = () => [
  rest.get('*/v:version/pets', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getListPetsMock()),
    );
  }),
  rest.post('*/v:version/pets', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCreatePetsMock()),
    );
  }),
  rest.get('*/v:version/pets/:petId', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getShowPetByIdMock()),
    );
  }),
];
