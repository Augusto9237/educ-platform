import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox'

import { useCreatCallListMutation } from 'graphql/api';
import { useContext, useState } from 'react';
import { RiPlayListAddLine, RiCheckFill, RiCheckboxFill, RiCheckboxIndeterminateFill } from 'react-icons/ri';
import { AdminContext } from '../app/context/AdminContext';
import DropDownMenu from './DropDownMenu';

export function NewListCall() {
    const { subscribers } = useContext(AdminContext)
    const [isModalNewListCall, setIsmodalAddClasse] = useState(false);
    const [createFrequency] = useCreatCallListMutation()

    return (
        <>
            <Dialog.Root modal={isModalNewListCall}>
                <Dialog.Trigger onClick={() => setIsmodalAddClasse(true)} className='flex flex-1 max-w-fit items-center text-base font-semibold rounded-md p-2 gap-2 justify-centerfont-semibold text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                    <RiPlayListAddLine />
                    <span className='leading-none'>Nova lista</span>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                        <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl gap-2  max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                            <header className='flex flex-1 relative items-center'>
                                <h1 className="mx-auto text-lg font-semibold">Nova lista de chamada</h1>
                                <Dialog.Close className='absolute right-0 text-textColor-700'>
                                    <strong className='text-textColor-300'>X</strong>
                                </Dialog.Close>
                            </header>
                            <div className="flex flex-row">
                                <span className="flex w-10 justify-center">#</span>
                                <span className="flex flex-1 justify-center">Nome</span>
                                <span className="flex w-28 justify-center">Status</span>
                            </div>
                            {subscribers?.subscribers.map((subscriberList, i) => (
                                <form key={subscriberList.id} className="flex flex-row">
                                    <span className="flex w-10 justify-center">{i + 1}</span>
                                    <span className="flex flex-1 pl-2">{subscriberList.name}</span>
                                    <div className="grid grid-cols-2 w-28">
                                        <div className='flex flex-1 flex-row items-center justify-items-center  text-textSecondaryColor-400  px-2 gap-2'>
                                            <Checkbox.Root
                                                className="bg-backgroundColor-300 hover:bg-backgroundColor-100 flex w-[18px] h-[18px] appearance-none items-center justify-center rounded-sm shadow-md shadow-textColor-300 outline-none"
                                                defaultChecked
                                                id="c1"
                                                name='present'
                                            >
                                                <Checkbox.Indicator className="text-lg">
                                                    <RiCheckboxFill />
                                                </Checkbox.Indicator>

                                            </Checkbox.Root>
                                            <strong>P</strong>
                                        </div>

                                        <div className='flex flex-1 flex-row items-center justify-items-center text-textSecondaryColor-200  px-2 gap-2'>
                                            <Checkbox.Root
                                                className="bg-backgroundColor-300 hover:bg-backgroundColor-100 flex w-[18px] h-[18px] appearance-none items-center justify-center rounded-sm shadow-md shadow-textColor-300 outline-none"
                                                defaultChecked
                                                id="c2"
                                                name='absences'
                                                value={"checked" || "unchecked" || "indeterminate"}
                                            >
                                                <Checkbox.Indicator className="text-lg ">
                                                    <RiCheckboxIndeterminateFill />
                                                </Checkbox.Indicator>
                                            </Checkbox.Root>
                                            <strong>F</strong>
                                        </div>
                                    </div>
                                </form>
                            ))}
                        </Dialog.Content>

                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}