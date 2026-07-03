export function Tag({ children }: { children: string }) {
  return (
    <li className="cursor-default rounded-xs border border-line-strong px-2.5 py-[5px] font-mono text-xs text-fg-muted transition-colors duration-150 hover:border-term/50 hover:text-fg">
      {children}
    </li>
  );
}
