/* eslint-disable no-unused-expressions */
const chai = require("chai");
const {
  Provinces,
  Districts,
  Sectors,
  Cells,
  Villages
} = require("../index");

const expect = chai.expect;

describe("Rwanda", function () {
  describe("getting provinces", function () {
    it("should return array of provinces", function () {
      const provinces = Provinces();
      expect(provinces).to.deep.equal([
        "East",
        "Kigali",
        "North",
        "South",
        "West"
      ]);
    });
    it("should return length of provinces equal to 5", function () {
      const provinces = Provinces();
      const length = provinces.length;
      expect(length).to.equal(5);
    });
  });

  describe("getting districts", function () {
    it("should return array of districts", function () {
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
    it("should return array of districts of a province", function () {
      const districts = Districts("Kigali");
      expect(typeof districts).to.equal("object");
    });
    it("should return array of districts of two provinces", function () {
      const districts = Districts(["Kigali", "North"]);
      const kigaliDistricts = Districts(["Kigali"]);
      const northDistricts = Districts(["North"]);

      expect(typeof districts).to.equal("object");
      expect(
        districts.includes(kigaliDistricts[0])
      ).to.equal(true);
      expect(
        districts.includes(northDistricts[0])
      ).to.equal(true);
    });
    it("should return length of districts equal to 30", function () {
      const districts = Districts();
      const length = districts.length;
      expect(length).to.equal(30);
    });
  });

  describe("getting sectors", function () {
    it("should return length of sectors equal to 416", function () {
      const sectors = Sectors();
      const length = sectors.length;
      expect(length).to.equal(416);
      expect(typeof sectors).to.equal("object");
    });
    it("should return array of sectors of a district", function () {
      const sectors = Sectors("South", "Huye");
      expect(typeof sectors).to.equal("object");
    });
    it("should not break on non existing province", function () {
      const sectors = Sectors("ljlkjadf", "Huye");
      expect(sectors).to.be.undefined;
    });
    it("should not break on non existing district", function () {
      try {
        Sectors("South", "ljlkajdlfk");
      } catch (error) {
        expect(error.message).to.equal(
          "Given data was invalid"
        );
      }
    });
    it("should return undefined", function () {
      const sectors = Sectors("South");
      expect(sectors).to.equal(undefined);
    });
  });
  describe("getting cells", function () {
    it("should return length of cells equal to 2149", function () {
      const cells = Cells();
      const length = cells.length;
      expect(length).to.equal(2149);
      expect(typeof cells).to.equal("object");
    });
    it("should return array of cells of a sector", function () {
      const cells = Cells("South", "Huye", "Tumba");
      const type = typeof cells;
      expect(type).to.equal("object");
    });
    it("should return undefined", function () {
      const cells = Cells("South", "Huye");
      expect(cells).to.equal(undefined);
    });
    it("should not break on non existing province", function () {
      const cells = Cells("ljakljfkj", "Huye", "Tumba");
      expect(cells).to.be.undefined;
    });
    it("should not break on non existing district", function () {
      const cells = Cells("South", "Kigali", "Tumba");
      expect(cells).to.be.undefined;
    });
    it("should return empty array on non existing sector", function () {
      try {
        Cells("South", "Huye", "Tumbaad");
      } catch (error) {
        expect(error.message).to.equal(
          "Given data was invalid"
        );
      }
    });
  });

  describe("getting villages", function () {
    it("should return length of villages equal to 14837", function () {
      const villages = Villages();
      const length = villages.length;
      expect(length).to.equal(14837);
      expect(typeof villages).to.equal("object");
    });
    it("should return array of villages in Cyarwa", function () {
      const villages = Villages(
        "South",
        "Huye",
        "Tumba",
        "Cyarwa"
      );
      expect(typeof villages).to.equal("object");
    });
    it("should return array of villages in Rukiri I cell", function () {
      const villages = Villages(
        "Kigali",
        "Gasabo",
        "Remera",
        "Rukiri I"
      );
      expect(typeof villages).to.equal("object");
    });
    it("should return undefined when there is a typo", function () {
      const villages = Villages(
        "Kigali",
        "Gasabo",
        "Remera",
        "RukiriI"
      );
      expect(villages).to.equal(undefined);
    });
    it("should return undefined when incomplete", function () {
      const villages = Villages("South", "Huye", "Tumba");
      expect(villages).to.equal(undefined);
    });
    it("should not break on non existing province", function () {
      const villages = Villages(
        "ljakljfkj",
        "Huye",
        "Tumba",
        "Rukiri I"
      );
      expect(villages).to.be.undefined;
    });
    it("should not break on non existing district", function () {
      const villages = Villages(
        "South",
        "Kigali",
        "Tumba",
        "Rukiri I"
      );
      expect(villages).to.be.undefined;
    });
    it("should not break non existing sector", function () {
      const villages = Villages(
        "South",
        "Huye",
        "Tumbaad",
        "Rukiri I"
      );
      expect(villages).to.be.undefined;
    });
    it("should not break on non  existing cell", function () {
      const villages = Villages(
        "South",
        "Huye",
        "Tumba",
        "lkjalkdjf"
      );
      expect(villages).to.be.undefined;
    });
  });

  describe("case sensitivity", function () {
    it("should return villages of nyAKaBAnDA iI", function () {
      const villages = Villages(
        "kIGali",
        "nYaruGenGE",
        "NYAKABANDA",
        "nyAKaBAnDA iI"
      );
      expect(villages).to.deep.equal([
        "Ibuhoro",
        "Kabeza",
        "Kanyiranganji",
        "Karujongi",
        "Kigarama",
        "Kirwa"
      ]);
    });

    it("should return villages of raNgO a", function () {
      const villages = Villages(
        "sOutH",
        "hUYE",
        "muKURA",
        "raNgO a"
      );
      expect(villages).to.deep.equal([
        "Agakera",
        "Agakombe",
        "Gaseke",
        "Kabahora",
        "Mpaza",
        "Nyamata",
        "Rwinuma"
      ]);
    });

    it("should return villages of Nyamata y' Umujyi", function () {
      const villages = Villages(
        "east",
        "buGEseRA",
        "nyamAta",
        "Nyamata y' Umujyi"
      );
      expect(villages).to.have.lengthOf(13);
    });

    it("should not break with undefined cell", function () {
      const villages = Villages(
        "east",
        "buGEseRA",
        "nyamAta",
        ""
      );
      expect(villages).to.be.undefined;
    });
  });
});
