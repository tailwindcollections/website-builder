import ChevronDownIcon from "../icons/chevron-down.svg?component";

function Accordion({ children, title }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <span className="text-sm font-semibold capitalize">{title}</span>
        <ChevronDownIcon className="h-5 w-5 rotate-90 stroke-current text-gray-400 transition-transform group-open:rotate-0" />
      </summary>
      <div className="border-b border-gray-200 py-4 px-6">{children}</div>
    </details>
  );
}

export default Accordion;
