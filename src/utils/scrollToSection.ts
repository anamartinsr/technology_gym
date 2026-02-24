export function scrollToSection(
  e: React.MouseEvent | null,
  href: string,
  setOpen?: (value: boolean) => void,
) {
  if (e) e.preventDefault();

  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (setOpen) setOpen(false);
}
