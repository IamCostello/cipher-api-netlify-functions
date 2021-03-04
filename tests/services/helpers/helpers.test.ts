import getAscii from "../../../src/services/helpers/getAscii";

describe("Helper functions", () => {
  it("Should return correct character ASCII value", () => {
    expect(getAscii("a")).toBe(97);
    expect(getAscii("A")).toBe(65);
  });
});
