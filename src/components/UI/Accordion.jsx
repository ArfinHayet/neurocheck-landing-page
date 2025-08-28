"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion(props) {
  return <AccordionPrimitive.Root {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn("border rounded-lg overflow-hidden", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between p-4 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 text-left text-sm font-medium rounded-md outline-none group",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm text-gray-600 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="px-4 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
}


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
