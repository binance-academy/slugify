import slugify from "../src";

describe("[UT] Slugify", () => {
  it("convert to lower case", () => {
    expect(slugify("ABC1")).toBe("abc1");
  });
  it("replace space by -", () => {
    expect(slugify("a b c 1")).toBe("a-b-c-1");
  });
  it("replace special chars by -", () => {
    expect(slugify("a~b%%c")).toBe("a-b-c");
  });
  it("keep - and _", () => {
    expect(slugify("a@-b_=c")).toBe("a-b_-c");
  });
  it("remove - duplicates", () => {
    expect(slugify("a--bc")).toBe("a-bc");
  });
  it("strip start and end special chars", () => {
    expect(slugify("!abc!")).toBe("abc");
  });
});
