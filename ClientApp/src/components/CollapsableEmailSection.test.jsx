import CollapsableEmailSection from "./CollapsableEmailSection";

const testEmail = "test@test.com";

describe("validates emails are not null, undefined, or empty", () => {
    it("is null", async () => {
      const result = CollapsableEmailSection.emailIsNotNullOrEmpty(null);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsableEmailSection.emailIsNotNullOrEmpty(undefined);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsableEmailSection.emailIsNotNullOrEmpty("");
      expect(result).toBe(false);
    });
    it("is good", async () => {
      const result = CollapsableEmailSection.emailIsNotNullOrEmpty(testEmail);
      expect(result).toBe(true);
    });
});

describe("validates array has emails", () => {
    it("is null", async () => {
      const result = CollapsableEmailSection.hasAnyKnownEmails([null,null,null]);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsableEmailSection.hasAnyKnownEmails([undefined,undefined,undefined]);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsableEmailSection.hasAnyKnownEmails(["","",""]);
      expect(result).toBe(false);
    });
    it("is good - all numbers", async () => {
      const result = CollapsableEmailSection.hasAnyKnownEmails([testEmail,testEmail,testEmail]);
      expect(result).toBe(true);
    });
    it("is good - two", async () => {
      const result = CollapsableEmailSection.hasAnyKnownEmails([testEmail,null,""]);
      expect(result).toBe(true);
    });
    it("is good - one", async () => {
      const result = CollapsableEmailSection.hasAnyKnownEmails([testEmail,undefined,undefined]);
      expect(result).toBe(true);
    });
});