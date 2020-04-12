# rwanda

[![Build Status](https://travis-ci.org/knowbee/rwanda.svg?branch=master)](https://travis-ci.org/knowbee/rwanda)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f5c5282ff06934496dd/maintainability)](https://codeclimate.com/github/knowbee/rwanda/maintainability)
[![npm](https://img.shields.io/npm/dt/rwanda.svg)](https://www.npmjs.com/package/rwanda)
[![Dependency Status](https://david-dm.org/knowbee/rwanda.svg)](https://david-dm.org/knowbee/rwanda)
[![npm](https://img.shields.io/npm/v/rwanda.svg)](https://www.npmjs.com/package/rwanda)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[![NPM](https://nodei.co/npm/rwanda.png)](https://nodei.co/npm/rwanda/)

This is a simple npm package that returns provinces, districts, sectors, villages and cells found in Rwanda.

Rwanda is organized in four provinces in addition to the Kigali city, 30 Districts, 416 Sectors, 2148 Cells and 14 837 Villages.

## Example

```js
const { Provinces, Districts } = require("rwanda");

console.log(Provinces()); // [ 'East', 'Kigali', 'North', 'South', 'West' ]
console.log(Districts()); // [ 'Bugesera', 'Gatsibo', 'Kayonza', 'Kirehe',...]
```

And how to get districts of a given province

```js
const { Districts } = require("rwanda");

console.log(Districts("kigali")); // [ 'Gasabo', 'Kicukiro', 'Nyarugenge' ]
```

## Methods

- [Provinces()](#provinces)
- [Districts()](#districts)
- [Sectors()](#sectors)
- [Cells()](#cells)
- [Villages()](#villages)

## Usage

```js
const { Provinces, Districts, Sectors, Cells, Villages } = require("rwanda");
```

All inputs are case-insensitive.

### Provinces()

Returns array of country provinces.

```js
["East", "Kigali", "North", "South", "West"];
```

### Districts()

By default it returns an array of country districts, if no params (province) is given

- Districts(province)

  If province is given it returns an array of districts found in that province.
  It returns `undefined` if province is not found.

### Sectors()

By default it returns array of country sectors, if no params (province, district) are given

- Sectors(province, district)

  If province and district are given it returns an array of sectors found from the given district in that province.
  It returns `undefined` if either province or district is not found.

### Cells()

By default it returns an array of all country cells.

- Cells(province, district, sector)

  if province, district and sector are given it returns an array of Cells found from the given sector.
  It returns `undefined` if either province, district or sector is not found.

### Villages()

By default it returns an array of all country villages.

- Villages(province, district, sector, cell)

  if province, district, sector and cell are given it returns an array of Villages found from the given cell.
  It returns `undefined` if either province, district , sector or cell is not found.

## Install

```cli
npm install rwanda
```

or

```cli
yarn add rwanda
```

# Contributors

| [<img src="https://github.com/oesukam.png" width="100px;"><br><sub><b>Olivier Esuka</b></sub>](https://github.com/oesukam) | [<img src="https://github.com/knowbee.png" width="100px;"><br><sub><b>Igwaneza Bruce</b></sub>](https://github.com/knowbee) |
| :------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |


# Contribution

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
