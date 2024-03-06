import { Submarine, SubmarineState } from "@/types/Submarine"
import { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { addSubmarine, getSubmarines, updateSubmarineState } from "@/store";
import { toast } from 'react-toastify';
import { uniqueId } from "@/utils/IdGenerator";
import SubmarineIcon from '@/assets/images/Submarine_icon.svg?react';

const schema = yup.object({
    name: yup.string()
        .required("Submarine name is required")
        .matches(/^[0-9a-zA-Z]+$/, {
            message: 'Submarine name should be alphanumeric',
        }),
}).required();

type FormData = yup.InferType<typeof schema>;

const SubmarineContainer = () => {
    const [submarine, setSubmarine] = useState<Submarine>({ id: "", name: "", state: SubmarineState.shown });
    const dispatch = useDispatch();
    const submarines: Submarine[] = useSelector(getSubmarines);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({ name }) => {
        const existing = submarines.find((_submarine) => _submarine.name === name);
        if (existing) {
            toast.error("Submarine with this name already exists..")
        }
        else {
            const _submarine: Submarine = {
                id: uniqueId(),
                name: name,
                state: SubmarineState.shown
            }
            dispatch(addSubmarine(_submarine));
            setSubmarine(_submarine)
        }
    };

    const getContents = () => {
        if (submarine?.id) return submarineContent();
        return registerSubmarine();
    }

    const registerSubmarine = () => {
        return <div className="w-full p-8 m-4 bg-white rounded shadow-lg md:max-w-sm md:mx-auto">
            <span className="block w-full mb-4 text-xl font-bold">Register Submarine</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className="mb-6">
                    <input {...register("name")} placeholder="Submarine Name" type="text" className="w-full p-2 mb-1 border rounded outline-none focus:shadow-outline" />
                    <p className="italic text-red-700">{errors.name?.message}</p>
                </span>
                <input type="submit" value="Register" className="px-4 py-2 text-sm font-semibold text-white uppercase bg-green-500 rounded cursor-pointer hover:bg-green-700" />
            </form>
        </div>
    }

    const toggleState = () => {
        const nextState = submarine?.state === SubmarineState.shown ? SubmarineState.selfHidden : SubmarineState.shown;
        const _submarine: Submarine = { ...submarine, state: nextState }
        dispatch(updateSubmarineState(_submarine));
        setSubmarine(_submarine)
    }

    const submarineContent = () => {
        const className = "w-80 h-50 " + (submarine?.state === SubmarineState.shown ? "blur-none" : "blur-sm");
        return <div className="flex flex-col items-center justify-center w-full p-8 m-4 bg-white rounded shadow-lg md:max-w-sm md:mx-auto">
            <span className="flex justify-between w-full mb-4">
                <span className="text-xl font-bold text-blue-800 uppercase">{submarine?.name}</span>
                {
                    submarine?.state !== SubmarineState.hidden &&
                    <span className=""><button onClick={toggleState}>
                        {submarine?.state === SubmarineState.shown ? "Hide" : "Show"}
                    </button>
                    </span>
                }
            </span>
            <div className="flex">
                <SubmarineIcon className={className} />
            </div>
        </div>
    }
    return (
        <div className="flex w-full h-full">
            {getContents()}
        </div>
    )
}

export default SubmarineContainer;