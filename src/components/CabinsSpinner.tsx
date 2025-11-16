import { ClockLoader } from "react-spinners";

function CabinsSpinner({ size = 52 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center py-16">
      <ClockLoader color="#C69963" size={size} aria-label="Loading cabins" />
    </div>
  );
}

export default CabinsSpinner;
