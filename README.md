# React Eye Dropper

React Eye Dropper component for all browsers

## Installation

```bash
pnpm install @layerhub-io/react-eye-dropper
```

## Usage

### Use as hook

```tsx
import { useEyeDropper } from "@layerhub-io/react-eye-dropper";

function App() {
  const { onInit, color } = useEyeDropper();
  return (
    <div style={{ backgrounColor: color }}>
      <div onClick={onInit}>TRIGGER</div>
    </div>
  );
}
```

### Use as component

```tsx
import EyeDropper from "@layerhub-io/react-eye-dropper";

function App() {
  const onChange = (c) => {
    console.log({ c });
  };
  return (
    <div style={{ backgrounColor: color }}>
      <EyeDropper onChange={onChange}>
        <div>TRIGGER</div>
      </EyeDropper>
    </div>
  );
}
```
