import { useState } from 'react'
import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen'
//import CAMPSITE establish useState hook and pass to DirectoryScreen for populating Main
const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES)

    return <DirectoryScreen campsites={campsites} />
}

export default Main
