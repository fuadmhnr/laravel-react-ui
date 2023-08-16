import { Button } from './button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Icon } from './icon';

export function ThemeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <Button
      size='icon'
      variant='outline'
      className='flex cursor-pointer items-center justify-center rounded-full focus:outline-none'
      type='button'
      aria-label='Toggle dark mode'
      onClick={toggleMode}
    >
      <Icon name='IconSun' className='text-primay dark:hidden' />
      <Icon name='IconMoonStars' className='hidden text-yellow-500 dark:block' />
    </Button>
  );
}
