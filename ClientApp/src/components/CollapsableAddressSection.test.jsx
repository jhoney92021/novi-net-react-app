import CollapsableAddressSection from "./CollapsableAddressSection";

const testAddress = {
  "address1": "123 Sample Company Street",
  "address2": "Suite 1",
  "city": "Orlando",
  "zipCode": "32819",
  "stateProvince": "Florida",
  "country": null
};

const missingName = {
  ...testAddress,
  "address1": ""
};
const missingNameNull = {
  ...testAddress,
  "address1": null
};
const missingNameUndefined = {
  ...testAddress,
  "address1": undefined
};

describe("validates addresses are not null, undefined, or empty", () => {
    it("is null", async () => {
      const result = CollapsableAddressSection.addressIsNotNullOrEmpty(null);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsableAddressSection.addressIsNotNullOrEmpty(undefined);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsableAddressSection.addressIsNotNullOrEmpty("");
      expect(result).toBe(false);
    });
    it("is good", async () => {
      const result = CollapsableAddressSection.addressIsNotNullOrEmpty(testAddress);
      expect(result).toBe(true);
    });
});

describe("validates array has addresses", () => {
    it("is null", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([null,null,null]);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([undefined,undefined,undefined]);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress(["","",""]);
      expect(result).toBe(false);
    });
    it("is good - all numbers", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([testAddress,testAddress,testAddress]);
      expect(result).toBe(true);
    });
    it("is good - two", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([testAddress,null,""]);
      expect(result).toBe(true);
    });
    it("is good - one", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([testAddress,undefined,undefined]);
      expect(result).toBe(true);
    });
    it("is missing name - empty", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([missingName,undefined,undefined]);
      expect(result).toBe(false);
    });
    it("is missing name - null", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([missingNameNull,undefined,undefined]);
      expect(result).toBe(false);
    });
    it("is missing name - undefined", async () => {
      const result = CollapsableAddressSection.hasAnyKnownAddress([missingNameUndefined,undefined,undefined]);
      expect(result).toBe(false);
    });
});