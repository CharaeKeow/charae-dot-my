import { toolbelts } from '../data/toolbelts';

const ToolbeltSection = () => {
  return (
    <section className="p-4 lg:p-8">
      <h2 className="text-[28px] lg:text-[32px]">My Go-to Toolbelt</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:mt-8 lg:justify-start lg:gap-x-12">
        {toolbelts.map((tool, index) => {
          const LogoComponent = tool.logo;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-y-2"
            >
              <LogoComponent className="size-8 md:size-10" />
              <span>{tool.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolbeltSection;