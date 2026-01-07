import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-0 h-15 flex items-center justify-between mb-2 ">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="pathwise logo"
            height={60}
            width={200}
            className="h-17 py-1 w-auto pt-3 object-contain"
          />
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn asChild>
            <Link href={"/dashboard"}>
              <Button className="bg-black/90 text-white hover:bg-red-900 active:bg-red-900 data-[state=open]:bg-red-900 
        transition-colors duration-300" >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Indsutry very well Insights</span>
              </Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-black/90 text-white hover:bg-red-900 active:bg-red-900 data-[state=open]:bg-red-900 
        transition-colors duration-300">
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className='h-4 w-4'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/resume"} className='flex items-center gap-2'>
                <FileText className="h-4 w-4" />
                <span className="">Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                <PenBox className="h-4 w-4" />
                <span className="">Cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/interview"} className='flex items-center gap-2'>
                <GraduationCap className="h-4 w-4" />
                <span className="">Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>  

          <SignedOut>
        <SignInButton>
          <Button className="bg-amber-800 text-white hover:bg-white active:bg-red-900 data-[state=open]:bg-red-900 
        transition-colors duration-300" >Sign In</Button>
        </SignInButton>

      </SignedOut>
      <SignedIn>
        <UserButton
        appearance={{
          elements:{
            avatarBox:"w-10 h-10",
            userButtonPopoverCard:"shadow-xl",
            userPreviewMainIdentifier:"font-semibold",
          }
        }} 
        afterSignOutUrl='/'
        />
      </SignedIn>
        </div>
      </nav>

      
    </header>
  );
}

export default Header