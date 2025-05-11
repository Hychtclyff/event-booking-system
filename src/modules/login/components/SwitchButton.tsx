import { IconSquareRoundedChevronsDownFilled } from "@tabler/icons-react";

const SwitchButton = ({
  text,
  actionText,
  onClick,
}: {
  text: string;
  actionText: string;
  onClick: () => void;
}) => {
  return (
    <div className="text-center mt-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {text}{" "}
        <button
          onClick={onClick}
          className="text-blue-500 font-semibold hover:underline ml-1"
        >
          {actionText}
        </button>
      </p>
    </div>
  );
};
export default SwitchButton;
