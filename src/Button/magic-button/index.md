# 按钮 MagicButton

```tsx
/**
 * inline: true
 */
import React from 'react';
import { CheckBoxList } from '../../public';

const options = [
  {
    checked: true,
    label: '基础按钮 and 充满魔法的按钮',
  },
];

const CheckBoxPage: React.FC<void> = () => <CheckBoxList options={options} />;
export default CheckBoxPage;
```

## 基本按钮

按钮分为 默认按钮、主要按钮、虚线按钮、危险按钮、链接按钮五种，你可以选择是否禁用他~

```tsx
import { MagicButton } from 'magic-design-react';
import React from 'react';
const BaseButton: React.FC<void> = () => {
  return (
    <div className="mg-flex mg-p-8 mg-justify-evenly">
      <MagicButton>默认按钮</MagicButton>
      <MagicButton btnType="primary">主页按钮</MagicButton>
      <MagicButton btnType="danger">危险按钮</MagicButton>
      <MagicButton btnType="dashed">虚线按钮</MagicButton>
      <MagicButton disabled={true}>禁用按钮</MagicButton>
      <MagicButton btnType="link" href="#">
        链接按钮
      </MagicButton>
    </div>
  );
};
export default BaseButton;
```

## 基本按钮尺寸

```tsx
import { MagicButton } from 'magic-design-react';
import React from 'react';
const BaseButton: React.FC<void> = () => {
  return (
    <div className="mg-flex mg-p-8 mg-justify-evenly">
      <MagicButton btnType="primary" size="sm">
        Small
      </MagicButton>
      <MagicButton btnType="primary">Default</MagicButton>
      <MagicButton btnType="primary" size="lg">
        Large
      </MagicButton>
    </div>
  );
};
export default BaseButton;
```

## 魔法按钮

这是一个动画按钮，鼠标悬停在上面会出现魔法效果哦

```tsx
import { MagicButton } from 'magic-design-react';
import React from 'react';
const AnimateButton: React.FC<void> = () => {
  return (
    <div className="mg-flex mg-p-8 mg-justify-evenly">
      <MagicButton btnType="animate" animateSpeed="1s" animateColor="#7fa1f7">
        魔法按钮
      </MagicButton>
    </div>
  );
};
export default AnimateButton;
```

## Demo

我们可以自由调节它的颜色、速度

```tsx
import { MagicButton } from 'magic-design-react';
import React from 'react';
const DemoDefault: React.FC<void> = () => {
  return (
    <div className="mg-flex mg-p-8 mg-justify-evenly">
      <MagicButton btnType="animate" animateSpeed="1s" animateColor="#7fa1f7">
        魔法按钮
      </MagicButton>
      <MagicButton btnType="animate" animateSpeed="0.6s" animateColor="#ed6e76">
        魔法按钮
      </MagicButton>
      <MagicButton btnType="animate" animateSpeed="2.5s" animateColor="#6bde84">
        魔法按钮
      </MagicButton>
    </div>
  );
};
export default DemoDefault;
```

<API src="./index.tsx"></API>
