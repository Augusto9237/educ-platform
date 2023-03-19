import * as Popover from '@radix-ui/react-popover';
import { GlobalContext } from 'app/context/GlobalContext';
import Link from 'next/link';
import { useContext } from 'react';
import { RiLogoutBoxRFill, RiUserFill } from 'react-icons/ri';
import { StudentAvatar } from './StudentAvatar';

export function ProfileMenu() {
    const { user, loadingUser } = useContext(GlobalContext)
    return (
        <Popover.Root>
            <Popover.Trigger>
                <div className="flex flex-row flex-1 justify-end items-center overflow-hidden gap-2">
                    <strong className="text-base">{user?.subscriber?.name}</strong>
                    {loadingUser && (
                        <div
                            className="inline-block h-[30px] w-[30px] animate-spin rounded-full border-4 border-solid border-backgroundColor-900 border-r-buttonColor-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >

                            </span>
                        </div>
                    )}

                    {!loadingUser && (
                        <StudentAvatar width="30px" height="30px" url={user?.subscriber?.pictureUrl} />
                    )}
                </div>
                <span>{`Turma: ${user?.subscriber?.class?.code}`}</span>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content className="flex flex-col gap-2 min-w-[85px] py-2 rounded bg-backgroundColor-100 shadow-lg ">
                    <Link href='/profile' className="flex flex-col px-2">
                        <button className="flex  items-center gap-2">
                            <RiUserFill /><strong>Perfil</strong>
                        </button>
                    </Link>

                    <div className='h-[1px] bg-textColor-300'/>

                    <Link href='/' className="flex flex-col px-2">
                        <button className="flex  items-center gap-2">
                            <RiLogoutBoxRFill /><strong>Sair</strong>
                        </button>
                    </Link>
                    <Popover.Arrow height={8} width={16} className='fill-textColor-700' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}