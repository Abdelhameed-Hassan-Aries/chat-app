import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import clsx from "clsx";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={clsx(
      "inline-flex items-center justify-center overflow-hidden relative",
      className
    )}
    {...props}
  />
));

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={clsx("object-cover w-full h-full", className)}
    {...props}
  />
));

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={clsx(
      "flex items-center justify-center w-full h-full bg-gray-400",
      className
    )}
    {...props}
  />
));

export { Avatar, AvatarImage, AvatarFallback };
