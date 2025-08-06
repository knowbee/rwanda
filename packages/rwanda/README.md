# rwanda

[![npm](https://img.shields.io/npm/v/rwanda.svg)](https://www.npmjs.com/package/rwanda)
[![npm](https://img.shields.io/npm/dt/rwanda.svg)](https://www.npmjs.com/package/rwanda)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A comprehensive TypeScript/JavaScript library for accessing administrative divisions of Rwanda. This package provides type-safe access to provinces, districts, sectors, cells, and villages in Rwanda.

Rwanda is administratively organized into:
- 5 Provinces (including Kigali City)
- 30 Districts
- 416 Sectors
- 2,148 Cells
- 14,837 Villages

## Installation

```bash
# Using npm
npm install rwanda

# Using yarn
yarn add rwanda

# Using pnpm
pnpm add rwanda
```

## Usage

### JavaScript (CommonJS)

```javascript
const { Provinces, Districts } = require('rwanda');

console.log(Provinces());
// Output: ['East', 'Kigali', 'North', 'South', 'West']

console.log(Districts('kigali'));
// Output: ['Gasabo', 'Kicukiro', 'Nyarugenge']
```

### TypeScript / ES Modules

```typescript
import { Provinces, Districts, Sectors } from 'rwanda';

// Get all provinces
const provinces: string[] = Provinces();

// Get districts in Kigali
const kigaliDistricts: string[] = Districts('kigali');

// Get sectors in Gasabo district
const gasaboSectors: string[] = Sectors('kigali', 'gasabo');
```

## API Reference

### `Provinces(): string[]`

Returns an array of all provinces in Rwanda.

```typescript
import { Provinces } from 'rwanda';

const provinces = Provinces();
// Returns: ['East', 'Kigali', 'North', 'South', 'West']
```

### `Districts(province?: string): string[] | undefined`

- `province` (optional): Name of the province to filter districts

Returns an array of districts. If a province is provided, returns only districts in that province.

```typescript
import { Districts } from 'rwanda';

// Get all districts in Rwanda
const allDistricts = Districts();

// Get districts in Kigali
const kigaliDistricts = Districts('kigali');
// Returns: ['Gasabo', 'Kicukiro', 'Nyarugenge']
```

### `Sectors(province?: string, district?: string): string[] | undefined`

- `province` (optional): Name of the province
- `district` (optional): Name of the district to filter sectors

Returns sectors based on the provided filters.

```typescript
import { Sectors } from 'rwanda';

// Get all sectors in Rwanda
const allSectors = Sectors();

// Get sectors in Gasabo district, Kigali
const gasaboSectors = Sectors('kigali', 'gasabo');
```

### `Cells(province?: string, district?: string, sector?: string): string[] | undefined`

- `province` (optional): Name of the province
- `district` (optional): Name of the district
- `sector` (optional): Name of the sector to filter cells

Returns cells based on the provided filters.

### `Villages(province?: string, district?: string, sector?: string, cell?: string): string[] | undefined`

- `province` (optional): Name of the province
- `district` (optional): Name of the district
- `sector` (optional): Name of the sector
- `cell` (optional): Name of the cell to filter villages

Returns villages based on the provided filters.

## Type Safety

The package includes TypeScript type definitions out of the box. All functions are properly typed:

```typescript
// TypeScript will infer the return type as string[]
const districts: string[] = Districts('kigali');

// TypeScript will show an error for invalid province names
const invalid = Districts('invalid'); // TypeScript error
```

## Case Insensitivity

All input parameters are case-insensitive:

```typescript
// All these are equivalent
Districts('kigali');
Districts('Kigali');
Districts('KIGALI');
```

## Error Handling

When invalid parameters are provided, the functions return `undefined`:

```typescript
const result = Districts('Nonexistent Province');
console.log(result); // undefined
```

```cli
yarn add rwanda
```

# Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/Karlmusingo"><img 
    style="border-radius:50%"
    src="https://github.com/Karlmusingo.png" width="100px;" alt="Karl MUSINGO"/><br /><sub><b>
Karl MUSINGO</b></sub></td>
    <td align="center"><a href="https://github.com/YvesIraguha"><img 
    style="border-radius:50%" src="https://github.com/YvesIraguha.png" width="100px;" alt="Yves Iraguha<"/><br /><sub><b>Yves Iraguha</b></sub></td>
    <td align="center"><a href="https://github.com/abayo-luc"><img 
    style="border-radius:50%" src="https://github.com/abayo-luc.png" width="100px;" alt="Abayo Luc"/><br /><sub><b>Abayo Luc</b></sub></td>
    <td align="center"><a href="https://github.com/oesukam"><img
    style="border-radius:50%" src="https://github.com/oesukam.png" width="100px;" alt="Olivier Esuka"/><br /><sub><b>Olivier Esuka</b></sub></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/knowbee"><img
    style="border-radius:50%" src="https://github.com/knowbee.png" width="100px;" alt="Igwaneza Bruce"/><br /><sub><b>Igwaneza Bruce</b></sub></td>
  </tr>
</table>
