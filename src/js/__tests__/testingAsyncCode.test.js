import GameSavingLoaderForTesting from "../testingAsyncCode";
import read from "../reader";


jest.mock("../reader.js");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should save the game", async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  read.mockReturnValue([...data].map(symbol => symbol.charCodeAt(0)));
  const result = await GameSavingLoaderForTesting.load(read);
  const expected = {
    "id": 9,
    "created": 1546300800,
    "userInfo": {
      "id": 1,
      "name": "Hitman",
      "level": 10,
      "points": 2000
    }
  };
  expect(result).toEqual(expected);
});

test("should return error", async () => {
  expect.assertions(1);
  read.mockReturnValue(new Error('Payment Required [402]'));
  try {
    await GameSavingLoaderForTesting.load(read);
  } catch (e) {
    const expected = 'Не удалось получить объект';
    expect(e.message).toBe(expected);
  }
});
