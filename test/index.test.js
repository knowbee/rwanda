const {
  Provinces,
  Districts,
  Sectors,
  Cells,
  Villages
} = require("../index.js");
const chai = require("chai");
const expect = chai.expect;

describe("Rwanda", async () => {
  describe("getting provinces", () => {
    it("should return array of provinces", function() {
      const provinces = Provinces();
      expect(provinces).to.deep.equal([
        "East",
        "Kigali",
        "North",
        "South",
        "West"
      ]);
    });
    it("length of provinces should equql 5", function() {
      const provinces = Provinces();
      const length = provinces.length;
      expect(length).to.equal(5);
    });
  });
  describe("getting districts", () => {
    it("should return array of districts", function() {
      const districts = Districts();
      expect(districts).to.deep.equal([
        "Bugesera",
        "Gatsibo",
        "Kayonza",
        "Kirehe",
        "Ngoma",
        "Nyagatare",
        "Rwamagana",
        "Gasabo",
        "Kicukiro",
        "Nyarugenge",
        "Burera",
        "Gakenke",
        "Gicumbi",
        "Musanze",
        "Rulindo",
        "Gisagara",
        "Huye",
        "Kamonyi",
        "Muhanga",
        "Nyamagabe",
        "Nyanza",
        "Nyaruguru",
        "Ruhango",
        "Karongi",
        "Ngororero",
        "Nyabihu",
        "Nyamasheke",
        "Rubavu",
        "Rutsiro",
        "Rusizi"
      ]);
    });
    it("length of districts should equal 30", function() {
      const districts = Districts();
      const length = districts.length;
      expect(length).to.equal(30);
    });
  });
  describe("getting sectors", () => {
    it("length of districts should equal 416", function() {
      const sectors = Sectors();
      const length = sectors.length;
      const type = typeof sectors;
      expect(length).to.equal(416);
      expect(type).to.equal("object");
    });
  });
  describe("getting cells", () => {
    it("length of cells should equal 2149", function() {
      const cells = Cells();
      const length = cells.length;
      const type = typeof cells;
      expect(length).to.equal(2149);
      expect(type).to.equal("object");
    });
  });
  describe("getting villages", () => {
    it("length of villages should equal 14837", function() {
      const villages = Villages();
      const length = villages.length;
      const type = typeof villages;
      expect(length).to.equal(14837);
      expect(type).to.equal("object");
    });
  });
});
