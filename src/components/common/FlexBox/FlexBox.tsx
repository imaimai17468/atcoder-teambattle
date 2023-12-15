import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./FlexBox.module.scss";
import { HTMLAttributes, ReactNode } from "react";

type divProps = NonNullable<JSX.IntrinsicElements["div"]["style"]>;

export type FlexBoxProps = {
  children?: ReactNode;
  margin?: divProps["margin"];
  padding?: divProps["padding"];
  flexDirection?: divProps["flexDirection"];
  flexWrap?: divProps["flexWrap"];
  justifyContent?: divProps["justifyContent"];
  alignItems?: divProps["alignItems"];
  alignContent?: divProps["alignContent"];
  flexBasis?: divProps["flexBasis"];
  flexGrow?: divProps["flexGrow"];
  flexShrink?: divProps["flexShrink"];
  width?: divProps["width"];
  height?: divProps["height"];
  overflow?: divProps["overflow"];
  style?: JSX.IntrinsicElements["div"]["style"];
  gap?: divProps["gap"];
  className?: HTMLAttributes<HTMLLIElement>["className"];
};

export const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
  (props, ref) => {
    const { children, style, className, ...stylePlops } = props;
    return (
      <div
        ref={ref}
        className={clsx(styles.flex, className)}
        style={{ ...stylePlops, ...style }}
      >
        {children}
      </div>
    );
  },
);

const [displayName] = Object.keys({ FlexBox });
FlexBox.displayName = displayName;
