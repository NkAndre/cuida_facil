{/*import { useState, useEffect } from "react";
import * as Location from "expo-location";

export function useGeoLocation() {
const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
        async function getPosition() {
         
            let { status } = await Location.requestForegroundPermissionsAsync();
            
            if (status !== "granted") {
                setErrorMsg("Permissão para acessar a localização foi negada.");
                setLoading(false);
                return;
            }

   
            try {
                let currentPosition = await Location.getCurrentPositionAsync({});
                setLocation(currentPosition);
            } catch (error) {
                setErrorMsg("Não foi possível obter a localização atual.");
            } finally {
                setLoading(false);
            }
        }

        getPosition();
    }, []);

    return { location, errorMsg, loading };
}*/}