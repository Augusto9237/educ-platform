
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { useCreateCallListMutation, useGetSubscriberByClassQuery, useUpdateCallListMutation } from 'graphql/api';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { RiCheckboxFill, RiCheckboxIndeterminateFill, RiEditBoxFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { SubscriberSelected } from '../app/(admin)/frequencies/page';
import { AdminContext } from '../app/context/AdminContext';

interface SubscriberFrequency {
    __typename?: "Presence" | undefined;
    id: string;
    value: string;
    name?: string;
    idSubscriber?: string;  
}[]

interface FrequencyEdit {
    callList: SubscriberSelected[];
    idFrequency?: string;
}

export function EditListCall({ callList, idFrequency }: FrequencyEdit) {
    const { classById, reloadClassById } = useContext(AdminContext)
    const [isModalNewListCall, setIsModalNewListCall] = useState(false);
    const [subscriberFrequency, setSubscriberFrequency] = useState<SubscriberFrequency[]>([]);
    const [editFrequency, setEditFrequency] = useState<SubscriberFrequency[]>([]);
    const [updateFrequency] = useUpdateCallListMutation();

    useEffect(() => {
        setEditFrequency(
            callList.map(item => ({
                id: item.id,
                value: item.prensente === true ? 'present' : 'abscence',
                name: item.subscriber?.name,
                idSubscriber: item.subscriber?.id
            }))
        )
    }, [isModalNewListCall]);
    function handleRadioChange(value: string, subscriberId: string) {
        const updatedSubscriberFrequency = [...subscriberFrequency];
        const index = updatedSubscriberFrequency.findIndex(subscriber => subscriber.id === subscriberId);

        if (index === -1) {
            updatedSubscriberFrequency.push({ id: subscriberId, value });
        } else {
            updatedSubscriberFrequency[index].value = value;
        }

        setSubscriberFrequency(updatedSubscriberFrequency);
    };

    ;

    async function handleSubmitUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const presenceArray = subscriberFrequency.map(item => ({
                Presence: {
                    where: {
                        id: item.id
                    },
                    data: {
                        prensente: item.value === 'present' ? true : false,
                    }
                }
            }));

            await updateFrequency({
                variables: {
                    id: idFrequency,
                    update: presenceArray
                }
            });

            toast.success('Lista de frequência atualizada com sucesso!');
            reloadClassById();
            setIsModalNewListCall(false);
        } catch (error) {
            console.log(error);
            toast.error('Algo deu errado, tente novamente');
        }

    };

    return (
        <>
            <Dialog.Root modal={isModalNewListCall}>
                {!callList && (
                    <Dialog.Trigger onClick={() => setIsModalNewListCall(true)} className='flex flex-1 max-w-fit items-center font-semibold rounded-md p-2 gap-2 justify-center text-textColor-500 bg-buttonColor-500/80'>
                        <FaPlusCircle />
                        <span className='leading-none'>Adicionar Frequência</span>
                    </Dialog.Trigger>
                )}

                {callList && (
                    <Dialog.Trigger onClick={() => setIsModalNewListCall(true)} className='flex px-2 items-center justify-center gap-2 rounded font-semibold text-backgroundColor-500 bg-backgroundColor-400/30 hover:bg-backgroundColor-400/25 hover:text-backgroundColor-400'>
                        <RiEditBoxFill />
                        <span>Editar</span>
                    </Dialog.Trigger>
                )}
                <Dialog.Portal>
                    <Dialog.Overlay className='w-screen z-20 h-sreen bg-textColor-900/80 fixed inset-0 backdrop-blur-md'>
                        <Dialog.Content className='absolute p-4 bg-backgroundColor-100 rounded-2xl max-sm:w-11/12 w-full  max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                            <header className='flex flex-1 relative items-center mb-2'>
                                <h1 className="mx-auto text-lg font-semibold">Editar lista de frequência
                                </h1>
                                <Dialog.Close onClick={() => setSubscriberFrequency([])} className='absolute right-0 text-textColor-700'>
                                    <strong className='text-textColor-300'>X</strong>
                                </Dialog.Close>
                            </header>
                            <form className='flex flex-col' onSubmit={handleSubmitUpdate} >
                                <div className="flex flex-row">
                                    <span className="flex w-10 justify-center">#</span>
                                    <span className="flex flex-1 justify-center">Nome</span>
                                    <span className="flex w-28 justify-center">Presença</span>
                                </div>

                                {callList && (
                                    <>
                                        {editFrequency?.map((subscriberList, i) => {
                                            return (
                                                <div key={subscriberList.id} className="relative py-2 flex flex-row hover:bg-backgroundColor-300/90">
                                                    <span className="flex w-10 justify-center">{i + 1}</span>
                                                    <span className="flex flex-1 pl-2">{subscriberList.name}</span>
                                                    <div className="flex w-28 justify-center">
                                                        <RadioGroup.Root
                                                            className="flex flex-row gap-4"
                                                            aria-label="View density"
                                                            name='present'
                                                            defaultValue={editFrequency[i].value}
                                                            onValueChange={value => handleRadioChange(value as string, subscriberList.id)}
                                                        >
                                                            <div className="flex gap-2 text-lg text-textSecondaryColor-400 items-center">
                                                                <RadioGroup.Item
                                                                    className="bg-backgroundColor-100 shadow-sm shadow-textColor-700 w-[18px] h-[18px] rounded-sm text-textSecondaryColor-400"
                                                                    value="present"
                                                                    id="r1"
                                                                >
                                                                    <RadioGroup.Indicator>
                                                                        <RiCheckboxFill size={18} />
                                                                    </RadioGroup.Indicator>
                                                                </RadioGroup.Item>
                                                                <label className="text-white leading-none" htmlFor="r1">
                                                                    P
                                                                </label>
                                                            </div>

                                                            <div className="flex items-center gap-2 text-lg text-textSecondaryColor-200">
                                                                <RadioGroup.Item
                                                                    className="bg-backgroundColor-100 shadow-sm shadow-textColor-700 w-[18px] h-[18px] rounded-sm "
                                                                    value="abscence"
                                                                    id="r2"
                                                                >
                                                                    <RadioGroup.Indicator>
                                                                        <RiCheckboxIndeterminateFill size={18} />
                                                                    </RadioGroup.Indicator>
                                                                </RadioGroup.Item>
                                                                <label className="text-white leading-none" htmlFor="r2">
                                                                    F
                                                                </label>
                                                            </div>
                                                        </RadioGroup.Root>
                                                    </div>
                                                    <div className="absolute bottom-0 h-[1px] w-full bg-textColor-200" />
                                                </div>
                                            )
                                        })}
                                    </>
                                )}

                                <div className="flex flex-1 gap-4 mt-4">
                                    <button type="submit" className="flex w-full justify-center items-center rounded-lg py-2 bg-buttonColor-500 text-textSecondaryColor-600 hover:bg-buttonColor-600">
                                        <strong>Salvar</strong>
                                    </button>
                                    <button type="reset" onClick={() => setIsModalNewListCall(false)} className="flex w-full justify-center items-center rounded-lg py-2 bg-backgroundColor-300 text-textSecondaryColor-600 hover:bg-textColor-200">
                                        <strong>Cancelar</strong>
                                    </button>
                                </div>
                            </form>
                        </Dialog.Content>

                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}