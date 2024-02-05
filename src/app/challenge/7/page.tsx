'use client'
import Screen from '@/components/Screen'
import React, { useState } from 'react'


export default function Page() {

    const [settings, setSettings] = useState<SettingPropsType[]>([{
        name: "AirPlane Mode",
        toggle: true,
        id: 1
    }, {
        name: "Wifi",
        toggle: true,
        id: 2
    }, {
        name: "Bluetooth",
        toggle: true,
        id: 3
    }, {
        name: "Mobile Data",
        toggle: true,
        id: 4
    }, {
        name: "Hotspot",
        toggle: true,
        id: 5
    }, {
        name: "General",
        toggle: false,
        settings: [{
            name: "Mobile Data",
            toggle: true,
            id: 12,
        }, {
            name: "Hotspot",
            toggle: true,
            id: 49
        }, {
            name: "General",
            toggle: false,
            settings: [{
                name: "Mobile Data",
                toggle: true,
                id: 430
            }, {
                name: "Hotspot",
                toggle: true,
                id: 410

            }],
            id: 52,
            isClicked: false
        }],
        id: 6,
        isClicked: false
    }])
    const [clickTrack, setClickTrack] = useState<number[]>([])
    const handleForwardScreen = (id: number): void => {

        setClickTrack(prev => [...prev, id])
        setSettings((prevSettings) => {
            mapping(prevSettings, id, true);
            return [...prevSettings];
        });

    };
    const handleBackwardScreen = (): void => {
        let id: number = clickTrack[clickTrack.length - 1]
        setClickTrack(prev =>
            prev.slice(0, -1)
        )
        setSettings((prevSettings) => {
            mapping(prevSettings, id, false);
            return [...prevSettings];
        });

    };

    return (
        <div>
            <Screen>
                {!!clickTrack.length &&
                    <button className='mt-2 mx-2 bg-blue-600 rounded-full p-2 w-8 flex items-center h-8 text-white' onClick={handleBackwardScreen}>{'<'}</button>
                }
                <div className='w-full h-full relative'>
                    <div className='p-2 grid gap-2 select-none slide-right'>
                        {settings.map((item, key) =>
                            <div className='flex first-line:items-center justify-between' key={key}>
                                {item.toggle ?
                                    <div className='flex border-b  grow p-2 min-h-14 items-center justify-between'>
                                        <span className=''>{item.name}</span>
                                        <ToggleButton />
                                    </div> :
                                    <button className='flex grow border-b p-2 min-h-14 items-center justify-between'
                                        onClick={() => handleForwardScreen(item.id)}
                                    >
                                        {item.name}
                                        <span className='mx-10 text-2xl font-medium'>
                                            {'>'}
                                        </span>
                                    </button>
                                }

                                {item.isClicked && <SwipeWindow settings={item.settings} handleForwardScreen={handleForwardScreen} />}
                            </div>)}
                    </div>
                </div>
            </Screen>
        </div>
    )
}

const ToggleButton = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    return <button className={`w-16 border h-8 rounded-full hover:opacity-70 flex `}
        onClick={() => setToggle(prev => !prev)}
    >
        <div className={`w-1/2 transition-all shadow ${toggle ? 'translate-x-full' : 'translate-x-0'} rounded-full h-full bg-blue-600`}></div>
    </button>
}

const SwipeWindow = ({ settings, handleForwardScreen }: { settings?: SettingPropsType[] | undefined, handleForwardScreen: HandleForwardScreenProp }) => {

    return <div className='h-full w-full bg-white absolute top-0 left-0 slide-left'>
        {settings?.map((item, key) =>
            <div className='flex first-line:items-center justify-between' key={key}>
                {item.toggle ?
                    <div className='flex border-b  grow p-2 min-h-14 items-center justify-between'>
                        <span className=''>{item.name}</span>
                        <ToggleButton />
                    </div> :
                    <button className='flex grow border-b p-2 min-h-14 items-center justify-between'
                        onClick={() => handleForwardScreen(item.id)}
                    >
                        {item.name}
                        <span className='mx-10 text-2xl font-medium'>
                            {'>'}
                        </span>
                    </button>
                }
                {item.isClicked && <SwipeWindow settings={item.settings} handleForwardScreen={handleForwardScreen} />}
            </div>)}
    </div>
}

function mapping(arr: SettingPropsType[] | undefined, id: number, clicked: boolean) {
    if (!arr?.length)
        return
    for (let i = 0; i < arr?.length; i++) {
        if (arr[i].id === id) {
            arr[i].isClicked = clicked;
            return;
        } else if (arr[i]?.settings) {
            mapping(arr[i]?.settings, id, clicked);
        }
    }
}

type SettingPropsType = {
    name: string;
    toggle: boolean;
    id: number;
    settings?: SettingPropsType[];
    isClicked?: boolean;
};
type HandleForwardScreenProp = (id: number) => void

