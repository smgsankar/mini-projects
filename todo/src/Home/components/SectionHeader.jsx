import { ChevronRight } from "../../Common/icons/ChevronRight";

export function SectionHeader({ title, onClick }) {
  return (
    <div>
      <div>
        <div className="flex justify-between items-baseline">
          <span className="font-semibold text-xl">{title}</span>
          <button
            type="button"
            onClick={onClick}
            className="flex font-semibold text-blue-600"
          >
            See All
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
