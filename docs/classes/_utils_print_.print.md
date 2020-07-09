[@edmundpf/print-ts](../README.md) › [Globals](../globals.md) › ["utils/Print"](../modules/_utils_print_.md) › [Print](_utils_print_.print.md)

# Class: Print

Print Class

## Hierarchy

* **Print**

## Index

### Constructors

* [constructor](_utils_print_.print.md#constructor)

### Properties

* [print](_utils_print_.print.md#private-print)

### Methods

* [debug](_utils_print_.print.md#debug)
* [error](_utils_print_.print.md#error)
* [ifPrintEnabled](_utils_print_.print.md#private-ifprintenabled)
* [info](_utils_print_.print.md#info)
* [log](_utils_print_.print.md#log)
* [prefixText](_utils_print_.print.md#private-prefixtext)
* [success](_utils_print_.print.md#success)
* [timestampText](_utils_print_.print.md#private-timestamptext)
* [warn](_utils_print_.print.md#warn)

## Constructors

###  constructor

\+ **new Print**(`args?`: any): *[Print](_utils_print_.print.md)*

*Defined in [utils/Print.ts:18](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *[Print](_utils_print_.print.md)*

## Properties

### `Private` print

• **print**: *boolean*

*Defined in [utils/Print.ts:18](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L18)*

## Methods

###  debug

▸ **debug**(`value`: any): *any*

*Defined in [utils/Print.ts:90](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L90)*

Debug

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

###  error

▸ **error**(`value`: any): *any*

*Defined in [utils/Print.ts:67](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L67)*

Error Method

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` ifPrintEnabled

▸ **ifPrintEnabled**(`method`: Function): *any*

*Defined in [utils/Print.ts:102](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L102)*

If print enabled

**Parameters:**

Name | Type |
------ | ------ |
`method` | Function |

**Returns:** *any*

___

###  info

▸ **info**(`value`: any): *any*

*Defined in [utils/Print.ts:43](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L43)*

Info

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

###  log

▸ **log**(`value`: any): *any*

*Defined in [utils/Print.ts:79](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L79)*

Log

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` prefixText

▸ **prefixText**(`prefix`: string, `value`: any): *string*

*Defined in [utils/Print.ts:122](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L122)*

Prefix Text

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | string |
`value` | any |

**Returns:** *string*

___

###  success

▸ **success**(`value`: any): *any*

*Defined in [utils/Print.ts:32](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L32)*

Success

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` timestampText

▸ **timestampText**(`value`: any): *string*

*Defined in [utils/Print.ts:114](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L114)*

Timestamp Text

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *string*

___

###  warn

▸ **warn**(`value`: any): *any*

*Defined in [utils/Print.ts:54](https://github.com/edmundpf/print-ts/blob/f757ccc/src/utils/Print.ts#L54)*

Warning

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*
