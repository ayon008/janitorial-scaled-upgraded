import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo, NavItem } from "./Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const NavMobile = ({
  NavItems,
}: {
  NavItems: NavItem[];
}) => {
  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger>
          <Menu color="white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription>
              <Accordion type="single" collapsible>
                {/*  */}
                {NavItems.map((nav, i) => {
                  return (
                    <AccordionItem key={i} value={`item-${i + 1}`}>
                      <AccordionTrigger>{nav.name}</AccordionTrigger>
                      {"children" in nav && (
                        <AccordionContent className="flex flex-col">
                          {nav.children.map((n, i) => (
                            "href" in n ? (
                              <Link key={i} href={n.href}>
                                {n.name}
                              </Link>
                            ) : null
                          ))}
                        </AccordionContent>
                      )}
                      {/* <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent> */}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
