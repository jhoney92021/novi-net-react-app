import {removeTimePart} from "./DateTimeHelpers";

const testDateTime = "2018-09-30T13:08:21.047";
const expected = "2018-09-30";

describe("parses datetimes", () => {
    it("returns only date part", async () => {
      const result = removeTimePart(testDateTime);
      expect(result).toBe(expected);
    });
    it("handles null", async () => {
      const result = removeTimePart(null);
      expect(result).toBe(null);
    });
    it("handles undefined", async () => {
      const result = removeTimePart(undefined);
      expect(result).toBe(null);
    });
    it("handles empty", async () => {
      const result = removeTimePart("");
      expect(result).toBe(null);
    });
});