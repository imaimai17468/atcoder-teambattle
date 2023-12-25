import { forwardRef, HTMLAttributes, ReactNode } from "react";

type DivProps = NonNullable<JSX.IntrinsicElements["div"]["style"]>;

export type FlexboxProps = {
  children?: ReactNode;
  margin?: DivProps["margin"];
  padding?: DivProps["padding"];
  flexDirection?: DivProps["flexDirection"];
  flexWrap?: DivProps["flexWrap"];
  justifyContent?: DivProps["justifyContent"];
  alignItems?: DivProps["alignItems"];
  alignContent?: DivProps["alignContent"];
  flexBasis?: DivProps["flexBasis"];
  flexGrow?: DivProps["flexGrow"];
  flexShrink?: DivProps["flexShrink"];
  width?: DivProps["width"];
  height?: DivProps["height"];
  overflow?: DivProps["overflow"];
  style?: JSX.IntrinsicElements["div"]["style"];
  gap?: DivProps["gap"];
  className?: HTMLAttributes<HTMLLIElement>["className"];
};

export const Flexbox = forwardRef<HTMLDivElement, FlexboxProps>(
  (props, ref) => {
    const { children, style, className, ...styleProps } = props;
    return (
      <div
        ref={ref}
        className={className}
        style={{ display: "flex", ...styleProps, ...style }}
      >
        {children}
      </div>
    );
  },
);

Flexbox.displayName = "Flexbox";
