import slugify from "../src";

describe("[UT] Slugify", () => {
  it("convert to lower case", () => {
    expect(slugify("ABC1")).toBe("abc1");
  });
  it("keep alphanum-_ chars", () => {
    expect(slugify("abc- ABC_ 123")).toBe("abc-abc_-123");
  });
  it("replace space by -", () => {
    expect(slugify("a b c")).toBe("a-b-c");
  });
  it("replace tabs by -", () => {
    expect(slugify("a\tb  c")).toBe("a-b-c");
  });
  it("replace new line by -", () => {
    expect(slugify("a\nb \n c")).toBe("a-b-c");
  });
  it("replace special chars by -", () => {
    expect(slugify("a~b%%c")).toBe("a-b-c");
  });
  it("replace unicode chars by -", () => {
    expect(slugify("a\u00A9b \u00A9 c")).toBe("a-b-c");
  });
  it("keep - and _", () => {
    expect(slugify("a@-b_=c")).toBe("a-b_-c");
  });
  it("remove - duplicates", () => {
    expect(slugify("a--bc")).toBe("a-bc");
  });
  it("remove leading -", () => {
    expect(slugify("-abc")).toBe("abc");
  });
  it("remove trailing -", () => {
    expect(slugify("abc-")).toBe("abc");
  });
  it("strip start and end special chars", () => {
    expect(slugify("!abc!")).toBe("abc");
  });
});
