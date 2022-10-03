import CollapsableMemberType from "./CollapsableMemberType";

const testMemberType = {
  "uniqueID": "7d61cd1d-7d0d-4c18-ab5b-64d9b83f88e5",
  "name": "Sample Member Type",
  "description": "<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\r\n<h2>Header Level 2</h2>\r\n<ol>\r\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\r\n<li>Aliquam tincidunt mauris eu risus.</li>\r\n</ol>\r\n<blockquote>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\r\n</blockquote>\r\n<h3>Header Level 3</h3>\r\n<ul>\r\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\r\n<li>Aliquam tincidunt mauris eu risus.</li>\r\n</ul>\r\n<h4>Header Level 4</h4>\r\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\r\n<h5>Header Level 5</h5>\r\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\r\n<h6>Header Level 6</h6>\r\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
  "forCompanies": true
}

const missingName = {
  ...testMemberType,
  "name":""
}

const missingNameNull = {
  ...testMemberType,
  "name":null
}

const missingNameUndefined = {
  ...testMemberType,
  "name":undefined
}

describe("validates member type is not null, undefined, or empty", () => {
    it("is null", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty(null);
      expect(result).toBe(false);
    });
    it("is undefined", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty(undefined);
      expect(result).toBe(false);
    });
    it("is empty", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty({});
      expect(result).toBe(false);
    });
    it("is good", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty(testMemberType);
      expect(result).toBe(true);
    });
    it("is bad name empty", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty(missingName);
      expect(result).toBe(false);
    });
    it("is bad name null", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty(missingNameNull);
      expect(result).toBe(false);
    });
    it("is bad name undefined", async () => {
      const result = CollapsableMemberType.memberTypeIsNotNullOrEmpty(missingNameUndefined);
      expect(result).toBe(false);
    });
});