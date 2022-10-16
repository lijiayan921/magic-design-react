import classNames from 'classnames';
import React, { FC } from 'react';
import './index.less';

// 定义Button组件基础入参属性
interface BaseButtonProps {
  /**
   * @description  节点类名
   */
  className: string;
  /**
   * @description  按钮失效状态
   */
  disabled: boolean;
  /**
   * @description  设置按钮大小
   */
  size: 'lg' | 'sm';
  /**
   * @description  设置按钮类型
   */
  btnType: 'primary' | 'default' | 'danger' | 'link' | 'dashed' | 'animate';
  /**
   * @description  设置按钮的文本
   */
  children: React.ReactNode;
  /**
   * @description  点击跳转的地址，与btnType='link'一起使用
   */
  href: string;
  /**
   * @description  设置魔法按钮的动画的速度
   */
  animateSpeed: string;
  /**
   * @description  设置魔法按钮的颜色
   */
  animateColor: string;
}

export type ButtonProps = Partial<BaseButtonProps>;

const MagicButton: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, className, href, animateSpeed, animateColor, ...restProps } = props;
  const styles: any = {
    '--animate-speed': animateSpeed,
    '--animate-color': animateColor,
  };
  // 利用 classNames 判断按钮的相应 class 值。
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
    [`btn-disabled`]: disabled,
  });

  // 判断如果是 link 类型，则输出 a 链接，否则输出 button。
  if (btnType === 'link' && href) {
    return (
      <a {...restProps} href={href} className={classes}>
        {children}
      </a>
    );
  } else if (btnType === 'animate') {
    return (
      <button {...restProps} className={classes} style={styles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span> {children}
      </button>
    );
  } else {
    return (
      <button {...restProps} className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};
// 属性默认值
MagicButton.defaultProps = {
  disabled: false,
  btnType: 'default',
};
export default MagicButton;
