import { describe, expect, it } from "vitest";
import { domains, projects, skills } from "./portfolio";
describe("portfolio content", () => {
  it("contains every core security practice", () => { expect(domains.map(d => d.title)).toEqual(expect.arrayContaining(["SAST", "SCA", "DAST", "IAST", "ASPM"])); });
  it("contains six example project frameworks", () => { expect(projects).toHaveLength(6); });
  it("keeps a broad security skills matrix", () => { expect(skills.length).toBeGreaterThanOrEqual(14); });
});
