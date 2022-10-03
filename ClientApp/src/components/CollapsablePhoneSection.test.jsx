import CollapsablePhoneSection from "./CollapsablePhoneSection";

describe("validates numbers are not null, undefined, or empty", () => {
    it("is null", async () => {
      const result = CollapsablePhoneSection.numberIsNotNullOrEmpty(null);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsablePhoneSection.numberIsNotNullOrEmpty(undefined);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsablePhoneSection.numberIsNotNullOrEmpty("");
      expect(result).toBe(false);
    });
    it("is good", async () => {
      const result = CollapsablePhoneSection.numberIsNotNullOrEmpty("555-5555");
      expect(result).toBe(true);
    });
});

describe("validates array has phone numbers", () => {
    it("is null", async () => {
      const result = CollapsablePhoneSection.hasAnyKnownPhoneNumbers([null,null,null]);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsablePhoneSection.hasAnyKnownPhoneNumbers([undefined,undefined,undefined]);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsablePhoneSection.hasAnyKnownPhoneNumbers(["","",""]);
      expect(result).toBe(false);
    });
    it("is good - all numbers", async () => {
      const result = CollapsablePhoneSection.hasAnyKnownPhoneNumbers(["555-5555","555-5555","555-5555"]);
      expect(result).toBe(true);
    });
    it("is good - two", async () => {
      const result = CollapsablePhoneSection.hasAnyKnownPhoneNumbers(["555-5555",null,""]);
      expect(result).toBe(true);
    });
    it("is good - one", async () => {
      const result = CollapsablePhoneSection.hasAnyKnownPhoneNumbers(["555-5555",undefined,undefined]);
      expect(result).toBe(true);
    });
});