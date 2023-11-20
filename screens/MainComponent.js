import { useState } from 'react'
import { CAMPSITES } from '../shared/campsites'
import { View } from 'react-native'
import DirectoryScreen from './DirectoryScreen'
import CampsiteInfoScreen from './CampsiteInfoScreen'

//import CAMPSITE establish useState hook and pass to DirectoryScreen for populating Main
const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES)
    const [selectedCampsiteId, setSelectedCampsiteId] = useState() //state undefined when empty arg
    //flex:1 causes component screens to fill vertical area of screen
    //CampsitesInfoScreen give prop item filtered form array based on what user selects, thus the second useState hook
    //need id of selected campsite passed from DirectoryScreen see onPress, could name it anything caus eit custom callback but name matches use
    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            <CampsiteInfoScreen
                campsites={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            />
        </View>
    )
}

export default Main
