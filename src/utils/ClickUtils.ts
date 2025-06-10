import { useEffect } from "react";

export default function HandleClick(
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  refOne: React.RefObject<HTMLDivElement | null>,
  refTwo: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refTwo.current &&
        !refTwo.current.contains(event.target as Node) &&
        refOne.current &&
        !refOne.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}
