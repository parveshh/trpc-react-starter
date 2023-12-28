export const mockPg = (func: jest.Mock) => {
  function mockPostgres() {
    return [];
  }
  mockPostgres.json = func;
  jest.mock("postgres", () => () => jest.fn(mockPostgres));
};
