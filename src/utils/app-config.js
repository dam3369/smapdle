import { actorMarker, investigatorMarker, locationMarker, recorderMarker, vehicleMarker } from 'components/markers'
import { READ, MOVE, NOTHING, ALL } from 'hooks/acl'

const config = {
  groups: [
    { role: 'admin', rules: { tracker: READ, actor: ALL, investigator: ALL, vehicle: ALL, location: ALL, recorder: ALL, panels: ALL }},
    { role: 'client', rules: { tracker: NOTHING, actor: MOVE, investigator: MOVE, vehicle: MOVE, location: MOVE, recorder: MOVE, panels: ALL }},
  ],
  markers: [
    {
      name: 'actor',
      filter: (state) => state.markers?.actor,
      Marker: actorMarker,
    },
    {
      name: 'investigator',
      filter: (state) => state.markers?.investigator,
      Marker: investigatorMarker,
    },
    {
      name: 'location',
      filter: (state) => state.markers?.location,
      Marker: locationMarker,
    },
    {
      name: 'recorder',
      filter: (state) => state.markers?.recorder,
      Marker: recorderMarker,
    },
    {
      name: 'vehicle',
      filter: (state) => state.markers?.vehicle,
      Marker: vehicleMarker,
    }
  ],
  map: {
    with3DBuilding: false,
  },
  mapbox: {
    accessToken: process.env.REACT_APP_MAP_ACCESSTOKEN,
    style: process.env.REACT_APP_MAP_STYLE,
  },
  firebase: {
      apiKey: process.env.REACT_APP_FRB_APIKEY,
      authDomain: `${process.env.REACT_APP_FRB_BASENAME}.firebaseapp.com`,
      databaseURL: `https://${process.env.REACT_APP_FRB_BASENAME}-default-rtdb.europe-west1.firebasedatabase.app`,
      projectId: process.env.REACT_APP_FRB_BASENAME,
      storageBucket: `${process.env.REACT_APP_FRB_BASENAME}.appspot.com`,
      messagingSenderId: process.env.REACT_APP_FRB_SENDERID,
      appId: process.env.REACT_APP_FRB_APPID,
      measurementId: process.env.REACT_APP_FRB_MEASUREMENTID,
  },
}

export default config
