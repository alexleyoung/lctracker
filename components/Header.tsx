import { headerLinks, homeLinks } from "@/constants";
import Links from "@/components/Links";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CiMenuBurger } from "react-icons/ci";

const Header = async () => {
  return (
    <>
      <header className='hidden bg-black fixed w-screen md:grid grid-cols-3 self-center text-slate-300 text-lg px-16 py-4'>
        <nav className='justify-self-start self-center'>
          <Links links={headerLinks} className='flex gap-8 items-center' />
        </nav>
        <h1 className='justify-self-center self-center'>LC Tracker</h1>
        <nav className='justify-self-end'>
          <Links links={homeLinks} className='flex gap-8 items-center' />
        </nav>
      </header>

      <header className='text-slate-300 bg-black text-xl flex justify-between py-4 px-8 md:hidden'>
        <h1 className='justify-self-center self-center'>LC Tracker</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='secondary'>
              <CiMenuBurger size='24px' />
            </Button>
          </SheetTrigger>
          <SheetContent className='bg-black border-none'>
            <nav className='text-white text-4xl h-screen grid place-items-center'>
              <Links
                links={[...headerLinks, ...homeLinks]}
                className='flex flex-col items-center justify-center gap-8'
              />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default Header;
