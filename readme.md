# react-click-outside

## How to use it?

You can use the hook this way:

### Install
```bash
# with npm
npm install react-click-outside

# with yarn
yarn add react-click-outside
```

### Usage

- Import useRef, useState and the package in your app:
```js
import {useRef, useState} from "react";
import {useOnClickOutside} from 'react-click-outside';
```
- Declare useState and useRef hooks in your component:
```js
const [showModal, setShowModal] = useState(false)
const ref = useRef(null);

```
- Use the useOnClickOutside hook to handle clicks outside of a specific element:
```js
 useOnClickOutside(ref, () => setShowModal(false));
```

# Here, ref is a reference to the element that you want to track clicks outside of, and setShowModal(false) is the action you want to trigger when a click occurs outside of that element, in this case, closing a modal.

## By following these steps, you can easily incorporate the useOnClickOutside hook into your React components to handle click events outside of specified elements.