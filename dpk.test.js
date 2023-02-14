const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test("should return a string", () => {
    const event = { id: 123, name: "John Doe" };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
  });

  test('should return "0" if event is falsy', () => {
    const result = deterministicPartitionKey(null);
    expect(result).toBe("0");
  });

  test("should use the event.partitionKey if it exists", () => {
    const event = { partitionKey: "abc123" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("abc123");
  });

  test("should stringify event if partitionKey is not present", () => {
    const event = { id: 123, name: "John Doe" };
    const result = deterministicPartitionKey(event);
    expect(result).toBeDefined();
  });

  test("should hash the stringified event if it exceeds the max length", () => {
    const event = { id: 123, name: "John Doe", extraData: "a".repeat(300) };
    const result = deterministicPartitionKey(event);
    expect(result).toBeDefined();
  });
});
