# API reference of :

A JSON serializer for the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_simple-json-serializer"></a>

### simple-json-serializer
A simple JSON serializer for the Pigalle framework.

**Example**  
```js
const {JsonSerializer} = require('@pigalle/serializers.simple-json')

// Create a new {JsonSerializer}
const jsonSerializer = JsonSerializer.factory()

// Serialize an object
const s = jsonSerializer.serialize({name: 'chicken'}) // returns a {string} equal to {"name": "chicken"}

// Unserialize a string.
const o = jsonSerializer.unserialize(s) // returns an {object} equal to {name: 'chicken'}
```

* [simple-json-serializer](#module_simple-json-serializer)
    * [~JsonSerializer](#module_simple-json-serializer..JsonSerializer)
        * [.serialize(o)](#module_simple-json-serializer..JsonSerializer+serialize) ⇒ <code>string</code>
        * [.unserialize(s)](#module_simple-json-serializer..JsonSerializer+unserialize) ⇒ <code>object</code>

<a name="module_simple-json-serializer..JsonSerializer"></a>

#### simple-json-serializer~JsonSerializer
A simple JSON serializer usable with the Pigalle framework.

**Kind**: inner class of [<code>simple-json-serializer</code>](#module_simple-json-serializer)  
**Access**: public  

* [~JsonSerializer](#module_simple-json-serializer..JsonSerializer)
    * [.serialize(o)](#module_simple-json-serializer..JsonSerializer+serialize) ⇒ <code>string</code>
    * [.unserialize(s)](#module_simple-json-serializer..JsonSerializer+unserialize) ⇒ <code>object</code>

<a name="module_simple-json-serializer..JsonSerializer+serialize"></a>

##### jsonSerializer.serialize(o) ⇒ <code>string</code>
Serialize the provided {object} as a JSON {string}

**Kind**: instance method of [<code>JsonSerializer</code>](#module_simple-json-serializer..JsonSerializer)  
**Returns**: <code>string</code> - The JSON string.  
**Throws**:

- <code>UndefinedError</code> if object is not defined.

**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to serialize. |

<a name="module_simple-json-serializer..JsonSerializer+unserialize"></a>

##### jsonSerializer.unserialize(s) ⇒ <code>object</code>
Unerialize the provided {string}.

**Kind**: instance method of [<code>JsonSerializer</code>](#module_simple-json-serializer..JsonSerializer)  
**Returns**: <code>object</code> - An {object}.  
**Throws**:

- <code>UndefinedError</code> if object is not defined.

**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | The {string} to unserialize. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Mon, 26 Feb 2018 16:00:52 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
