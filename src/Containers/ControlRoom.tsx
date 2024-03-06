import { getSubmarines, updateSubmarineState } from "@/store";
import { Submarine, SubmarineState } from "@/types/Submarine";
import { useDispatch, useSelector } from "react-redux";
import SubmarineIcon from '@/assets/images/Submarine_icon.svg?react';

const ControlRoom = () => {
  const submarines: Submarine[] = useSelector(getSubmarines);
  const dispatch = useDispatch();

  const toggleState = (submarine: Submarine) => {
    const nextState = submarine?.state === SubmarineState.shown ? SubmarineState.hidden : SubmarineState.shown;
    const _submarine: Submarine = { ...submarine, state: nextState }
    dispatch(updateSubmarineState(_submarine));
  }

  const getSubmarineList = () => {
    const retVal = submarines.map((submarine) => {
      const className = "w-80 h-50 " + (submarine?.state !== SubmarineState.hidden ? "blur-none" : "blur-sm");
      return <div className="flex flex-col items-center justify-center w-full p-8 m-4 bg-white rounded shadow-lg md:max-w-sm md:mx-auto">
        <span className="flex justify-between w-full mb-4">
          <span className="text-xl font-bold text-blue-800 uppercase">{submarine?.name}</span>
          {
            submarine?.state !== SubmarineState.hidden &&
            <span className=""><button onClick={() => toggleState(submarine)}>
              {submarine?.state === SubmarineState.shown ? "Hide" : "Show"}
            </button>
            </span>
          }
        </span>
        <div className="flex">
          <SubmarineIcon className={className} />
        </div>
      </div>
    })
    return retVal;
  }
  return (
    <div className="w-full h-full p-2 bg-white">
      <span className="block w-full mb-4 text-xl font-bold">Control Room</span>
      {getSubmarineList()}
    </div>
  )
}

export default ControlRoom